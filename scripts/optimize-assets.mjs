import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const assetsDirectory = path.join(root, 'dist', 'assets')
const imageNames = [
  'flowmoney.jpg',
  'opsflow.png',
  'edge-health.jpg',
  'prevail.png',
  'Devscraper.png',
  'metsad-engineering.jpg',
  'widestar.png',
  'deccan.png',
  'a.png',
  'b.png',
  'c.png',
  'syle.jpg',
]

for (const imageName of imageNames) {
  const sourcePath = path.join(assetsDirectory, imageName)
  const outputPath = path.join(assetsDirectory, `${path.parse(imageName).name}.webp`)
  const image = sharp(sourcePath).rotate()

  if (imageName === 'syle.jpg') {
    image.resize({ width: 720, height: 960, fit: 'inside', withoutEnlargement: true })
  } else {
    image.resize({ width: 1600, height: 1200, fit: 'inside', withoutEnlargement: true })
  }

  await image.webp({ quality: 78, effort: 5 }).toFile(outputPath)
  await fs.unlink(sourcePath)
}

console.log(`Generated optimized WebP images for ${imageNames.length} portfolio assets.`)
