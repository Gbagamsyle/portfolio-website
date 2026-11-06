import { useEffect, useRef, useState } from 'react'
import MainLayout from './layouts/MainLayout'
import Marquee from './components/Marquee/Marquee'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Services from './sections/Services/Services'
import Work from './sections/Work/Work'
import Stack from './sections/Stack/Stack'
import Testimonials from './sections/Testimonials/Testimonials'
import Contact from './sections/Contact/Contact'
import ProjectDetail from './sections/ProjectDetail/ProjectDetail'
import { projects } from './data/siteData'

export default function App() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/'
  const projectSlug = pathname.startsWith('/projects/')
    ? pathname.split('/')[2]
    : null
  const activeProject = projectSlug ? projects.find((project) => project.slug === projectSlug) : null

  useEffect(() => {
    const origin = window.location.origin
    const canonicalUrl = `${origin}${window.location.pathname}`
    const title = activeProject
      ? `${activeProject.title} — Project by Ogaba Silas`
      : projectSlug
        ? 'Project Not Found — Ogaba Silas'
        : 'Ogaba Silas | Web Developer in Abuja, Nigeria & Worldwide'
    const description = activeProject
      ? activeProject.description
      : projectSlug
        ? 'The requested project could not be found.'
        : 'Ogaba Silas is a website and web developer in Abuja, Nigeria, building fast, accessible websites and apps for clients locally and worldwide.'
    const image = activeProject?.background ?? '/assets/syle.jpg'
    const imageUrl = new URL(image, origin).href

    document.title = title

    const setMeta = (selector, attribute, key, content) => {
      let element = document.head.querySelector(selector)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.appendChild(element)
      }
      element.content = content
    }

    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[name="robots"]', 'name', 'robots', projectSlug && !activeProject ? 'noindex, follow' : 'index, follow, max-image-preview:large')
    setMeta('meta[property="og:type"]', 'property', 'og:type', activeProject ? 'article' : 'website')
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    setMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl)
    setMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', activeProject ? `${activeProject.title} project preview` : 'Ogaba Silas, website and web developer in Abuja, Nigeria')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl

  }, [activeProject, projectSlug])

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current

    if (!cursor || !ring) return

    const onMove = (event) => {
      cursor.style.left = `${event.clientX - 5}px`
      cursor.style.top = `${event.clientY - 5}px`
      ring.style.left = `${event.clientX - 18}px`
      ring.style.top = `${event.clientY - 18}px`
    }

    document.addEventListener('mousemove', onMove)

    const hoverEls = document.querySelectorAll('a, button, .service-card, .work-card, .stack-item')
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2.5)'
        ring.style.transform = 'translate(-13px,-13px) scale(1.4)'
      })
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)'
        ring.style.transform = 'translate(-13px,-13px) scale(1)'
      })
    })

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))

    document.querySelectorAll('[data-target]').forEach((el) => {
      const target = Number(el.dataset.target)
      const counterObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            let current = 0
            const step = target / 40
            const timer = setInterval(() => {
              current = Math.min(current + step, target)
              el.textContent = `${Math.round(current)}${target >= 5 ? '+' : ''}`
              if (current >= target) clearInterval(timer)
            }, 40)
            counterObserver.unobserve(el)
          }
        },
        { threshold: 0.5 }
      )
      counterObserver.observe(el)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      hoverEls.forEach((el) => {
        el.onmouseenter = null
        el.onmouseleave = null
      })
      revealObserver.disconnect()
    }
  }, [])

  return (
    <MainLayout cursorRef={cursorRef} ringRef={ringRef}>
      {projectSlug ? <ProjectDetail slug={projectSlug} /> : <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Work />
      <Stack />
      <Testimonials activeIndex={activeTestimonial} setActiveIndex={setActiveTestimonial} />
      <Contact />
      </>}
    </MainLayout>
  )
}
