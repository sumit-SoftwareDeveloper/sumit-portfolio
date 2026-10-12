import { useRef } from 'react'

// Mouse ke saath 3D tilt + glare. Kisi bhi card ko <Tilt as="article" className="..."> me wrap karo.
export default function Tilt({ as: Tag = 'div', max = 7, className = '', children, ...rest }) {
  const ref = useRef(null)

  const onMove = (e) => {
    if (e.pointerType === 'touch') return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--ry', `${(px * max * 2).toFixed(2)}deg`)
    el.style.setProperty('--rx', `${(-py * max * 2).toFixed(2)}deg`)
    el.style.setProperty('--gx', `${((px + 0.5) * 100).toFixed(1)}%`)
    el.style.setProperty('--gy', `${((py + 0.5) * 100).toFixed(1)}%`)
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <Tag ref={ref} className={`tilt ${className}`} onPointerMove={onMove} onPointerLeave={onLeave} {...rest}>
      {children}
    </Tag>
  )
}