import { useEffect, useRef, useState } from 'react'
import './Intro.css'

// Video ke LAST frame me nav items kahan hain (0–1 fraction of video frame).
// Agar kabhi video badlo aur links text se hat jaye, to sirf yeh numbers adjust karo.
const HOTSPOTS = [
  { label: 'Home', href: '#intro', x0: 0.108, x1: 0.158 },
  { label: 'Work', href: '#projects', x0: 0.626, x1: 0.673 },
  { label: 'About', href: '#about', x0: 0.689, x1: 0.742 },
  { label: 'Skills', href: '#toolkit', x0: 0.757, x1: 0.807 },
  { label: 'Contact', href: '#contact', x0: 0.822, x1: 0.892 },
]
const HOTSPOT_Y = 0.125 // vertical center
const HOTSPOT_H = 0.075 // height (fraction of frame)

export default function Intro() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const [frame, setFrame] = useState(null)
  const [failed, setFailed] = useState(false)

  // Video frame ka asli size/position (object-fit ke baad) calculate karo
  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    const update = () => {
      const cw = section.clientWidth
      const ch = section.clientHeight
      const vw = video.videoWidth || 1280
      const vh = video.videoHeight || 720
      const scale = Math.max(cw / vw, ch / vh) // object-fit: cover
      const w = vw * scale
      const h = vh * scale
      setFrame({ w, h, left: (cw - w) / 2, top: (ch - h) / 2 })
    }

    update()
    video.addEventListener('loadedmetadata', update)
    const ro = new ResizeObserver(update)
    ro.observe(section)
    return () => {
      video.removeEventListener('loadedmetadata', update)
      ro.disconnect()
    }
  }, [])

  // Autoplay + sound.
  // Browsers bina user-gesture ke sound block karte hain, isliye:
  // pehle sound ke saath try, nahi chala to muted chalao aur pehli click/tap/key/scroll pe unmute.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const events = ['pointerdown', 'click', 'touchstart', 'keydown', 'wheel']

    const removeListeners = () => events.forEach((e) => window.removeEventListener(e, unmute))

    function unmute() {
      video.muted = false
      video.volume = 1
      video.play().catch(() => {})
      removeListeners()
    }

    const start = async () => {
      video.volume = 1
      try {
        video.muted = false
        await video.play()
        return
      } catch {
        /* browser ne sound autoplay block kiya */
      }
      video.muted = true
      try {
        await video.play()
      } catch (error) {
        console.warn('Intro autoplay blocked:', error)
      }
      // video khatam ho gaya ho to unmute ki zarurat nahi
      if (!video.ended) events.forEach((e) => window.addEventListener(e, unmute, { passive: true }))
    }

    start()
    return () => {
      removeListeners()
      video.pause()
    }
  }, [])

  const go = (href) => (e) => {
    e.preventDefault()
    if (href === '#intro') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="intro" ref={sectionRef} className="intro" aria-label="Introduction">
      <video
        ref={videoRef}
        className="intro-video"
        src="/videos/intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onError={() => setFailed(true)}
      />

      {/* Video ke baked navbar ke upar invisible clickable links */}
      {frame &&
        HOTSPOTS.map((item) => {
          const pad = 0.006
          const h = frame.h * HOTSPOT_H
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={go(item.href)}
              aria-label={item.label}
              className="intro-hotspot"
              style={{
                left: frame.left + (item.x0 - pad) * frame.w,
                width: (item.x1 - item.x0 + pad * 2) * frame.w,
                top: frame.top + HOTSPOT_Y * frame.h - h / 2,
                height: h,
              }}
            />
          )
        })}

      {failed && (
        <div className="intro-fallback">
          <h1>SUMIT SINGH</h1>
          <span />
          <p>SOFTWARE DEVELOPER • BUILDING WHAT’S NEXT</p>
          <small>Intro video load nahi hui (public/videos/intro.mp4 check karo)</small>
        </div>
      )}
    </section>
  )
}
