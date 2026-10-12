import { useState } from 'react'
import { profile } from '../data'
import './Contact.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="page-section contact">
      <div className="contact-inner">
        <div className="diamond-divider"><b /><span /><em /><span /><b /></div>
        <h2 data-reveal>LET’S WORK TOGETHER</h2>
        <p className="contact-lead">
          Whether it’s an opportunity, a collaboration, or simply a conversation about
          technology, I’d be happy to hear from you.
        </p>

        <div className="contact-actions" data-reveal style={{ '--d': '120ms' }}>
          <a className="btn btn-dark" href={`mailto:${profile.email}`}>{profile.email}</a>
          <button type="button" className="btn btn-outline" onClick={copyEmail}>
            {copied ? 'Email copied ✓' : 'Copy email'}
          </button>
        </div>

        <div className="contact-socials">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>

        <footer className="contact-footer">
          <span>© 2026 Sumit Singh</span>
          <a href="#intro">Back to top ↑</a>
        </footer>
      </div>
    </section>
  )
}