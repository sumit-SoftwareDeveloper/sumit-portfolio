import { useEffect, useRef } from 'react'

// Hero ka 3D isometric glass-UI illustration (pure CSS 3D, koi image nahi chahiye).
// Mouse ke saath halka parallax tilt hota hai.
export default function HeroArt() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia('(hover: hover)').matches) return

    const onMove = (e) => {
      const mx = (e.clientX / window.innerWidth - 0.5) * 2
      const my = (e.clientY / window.innerHeight - 0.5) * 2
      el.style.setProperty('--mx', mx.toFixed(3))
      el.style.setProperty('--my', my.toFixed(3))
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div className="art" ref={ref} aria-hidden="true" data-reveal style={{ '--d': '150ms' }}>
      <div className="art-floor" />

      <div className="scene">
        <div className="plane">
          {/* connector wires (base plane pe) */}
          <svg className="wires" viewBox="0 0 420 420" fill="none" stroke="#6f685b" strokeWidth="1.6" strokeLinecap="round">
            <path d="M52 150 C 52 120, 90 120, 120 120" />
            <path d="M60 60 L 60 100" />
            <path d="M20 268 L 20 232 C 20 205 40 205 70 205" />
            <path d="M268 150 L 330 150 C 350 150, 352 170, 352 190" />
            <path d="M356 100 C 356 130, 330 130, 300 130" />
            <path d="M322 332 L 322 262 C 322 245 336 240 352 240" />
            <path d="M200 360 L 300 345" />
          </svg>

          <div className="pn p1"><i /><i /><i /></div>

          <div className="pn p2">
            <b className="rd" />
            <u className="pill" />
            <span className="ln l1" /><span className="ln l2" /><span className="ln l3" /><span className="ln l4" />
          </div>

          <div className="pn p3">
            <i /><i /><i />
            <u className="pill"><s /><s /></u>
          </div>

          <div className="pn p4">
            <b className="rd s" />
            <span className="ln l1" /><span className="ln l2" />
            <i className="dk" /><i className="lt" />
          </div>

          <span className="nd nd-dark" style={{ left: 22, top: 118 }}><em /></span>
          <span className="nd nd-taupe" style={{ left: 38, top: 22 }}><em /></span>
          <span className="nd nd-white round" style={{ left: -8, top: 262 }} />
          <span className="nd nd-big" style={{ left: 330, top: 188 }}>
            <svg viewBox="0 0 24 24" fill="#e9e4da"><circle cx="9" cy="9" r="3.4" /><circle cx="15" cy="9" r="3.4" /><circle cx="9" cy="15" r="3.4" /><circle cx="15" cy="15" r="3.4" /></svg>
          </span>
          <span className="nd nd-red round" style={{ left: 304, top: 330 }} />
          <span className="nd nd-white" style={{ left: 342, top: 78 }}><em /></span>
        </div>
      </div>

      <span className="spark s1" /><span className="spark s2" /><span className="spark s3" />
      <span className="speck sp1" /><span className="speck sp2" />
    </div>
  )
}