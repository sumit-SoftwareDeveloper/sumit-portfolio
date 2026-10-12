import { useEffect } from 'react'
import Intro from './components/Intro'
import Hero from './components/Hero'
import Toolkit from './components/Toolkit'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  // Scroll karne pe elements depth ke saath upar uthte hue aate hain
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) return
    document.documentElement.classList.add('reveal-ready')

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="portfolio-app">
      {/* Page 1: intro video — khatam hone ke baad last frame (SUMIT SINGH) screen pe rehta hai */}
      <Intro />

      {/* Scroll karo ya video ke nav pe click karo → portfolio */}
      <main>
        <Hero />
        <Toolkit />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  )
}