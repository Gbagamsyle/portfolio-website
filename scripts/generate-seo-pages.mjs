import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outputDirectory = path.join(root, 'dist')
const siteUrl = 'https://ogabasilas.netlify.app'
const vite = await createServer({
  root,
  configFile: path.join(root, 'vite.config.js'),
  server: { middlewareMode: true },
  appType: 'custom',
  mode: 'production',
})

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;')

const replaceMeta = (html, attribute, key, content) => {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const pattern = new RegExp(`<meta ${attribute}="${escapedKey}" content="[^"]*"\\s*\\/?>`)
  return html.replace(pattern, `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`)
}

try {
  const [{ default: App }, { projects }] = await Promise.all([
    vite.ssrLoadModule('/src/App.jsx'),
    vite.ssrLoadModule('/src/data/siteData.js'),
  ])
  const template = await fs.readFile(path.join(outputDirectory, 'index.html'), 'utf8')

  const pages = [
    {
      pathname: '/',
      title: 'Ogaba Silas | Web Developer in Abuja, Nigeria & Worldwide',
      description: 'Ogaba Silas is a website and web developer in Abuja, Nigeria, building fast, accessible websites and apps for clients locally and worldwide.',
      image: '/assets/syle.webp',
      type: 'website',
    },
    ...projects.map((project) => ({
      pathname: `/projects/${project.slug}`,
      title: `${project.title} — Project by Ogaba Silas`,
      description: project.description,
      image: project.background,
      type: 'article',
      project,
    })),
  ]

  for (const page of pages) {
    const canonicalUrl = `${siteUrl}${page.pathname}`
    const imageUrl = new URL(page.image, `${siteUrl}/`).href
    const pageHtml = template
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
      .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
    let html = replaceMeta(pageHtml, 'name', 'description', page.description)
    html = replaceMeta(html, 'property', 'og:type', page.type)
    html = replaceMeta(html, 'property', 'og:title', page.title)
    html = replaceMeta(html, 'property', 'og:description', page.description)
    html = replaceMeta(html, 'property', 'og:url', canonicalUrl)
    html = replaceMeta(html, 'property', 'og:image', imageUrl)
    html = replaceMeta(html, 'name', 'twitter:title', page.title)
    html = replaceMeta(html, 'name', 'twitter:description', page.description)
    html = replaceMeta(html, 'name', 'twitter:image', imageUrl)

    const structuredData = page.project
      ? {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: page.project.title,
          description: page.project.overview,
          image: imageUrl,
          url: canonicalUrl,
          creator: { '@type': 'Person', name: 'Ogaba Silas', url: `${siteUrl}/` },
          keywords: page.project.stack.join(', '),
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Ogaba Silas',
          url: `${siteUrl}/`,
          image: imageUrl,
          jobTitle: 'Website Developer, Web Developer, App Developer, Frontend Developer, and Fullstack Engineer',
          description: page.description,
          areaServed: [
            { '@type': 'City', name: 'Abuja' },
            { '@type': 'Country', name: 'Nigeria' },
            'Worldwide',
          ],
        }
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">${JSON.stringify(structuredData).replaceAll('<', '\\u003c')}</script>`
    )

    globalThis.window = { location: { origin: siteUrl, pathname: page.pathname } }
    const markup = renderToString(React.createElement(App))
    html = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)

    const outputPath = page.pathname === '/'
      ? path.join(outputDirectory, 'index.html')
      : path.join(outputDirectory, page.pathname.slice(1), 'index.html')
    await fs.mkdir(path.dirname(outputPath), { recursive: true })
    await fs.writeFile(outputPath, html)
  }

  console.log(`Generated SEO-ready HTML for ${pages.length} routes.`)
} finally {
  delete globalThis.window
  await vite.close()
}