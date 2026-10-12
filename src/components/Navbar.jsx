import { useState } from 'react'
import './Navbar.css'

const links = [
  { label: 'Home', href: '#intro' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#toolkit' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <a className="nav-logo" href="#intro" aria-label="Sumit Singh – home">SS.</a>

      <button
        type="button"
        className={`nav-toggle ${open ? 'is-open' : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span />
      </button>

      <nav className={`nav-links ${open ? 'is-open' : ''}`}>
        {links.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
      </nav>
    </header>
  )
}