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
import { testimonials } from './data/siteData'

export default function App() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

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

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => {
      document.removeEventListener('mousemove', onMove)
      hoverEls.forEach((el) => {
        el.onmouseenter = null
        el.onmouseleave = null
      })
      revealObserver.disconnect()
      clearInterval(interval)
    }
  }, [])

  return (
    <MainLayout cursorRef={cursorRef} ringRef={ringRef}>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Work />
      <Stack />
      <Testimonials activeIndex={activeTestimonial} setActiveIndex={setActiveTestimonial} />
      <Contact />
    </MainLayout>
  )
}
