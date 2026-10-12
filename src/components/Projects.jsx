import { useMemo, useState } from 'react'
import { projects, profile } from '../data'
import Tilt from './Tilt'
import './Projects.css'

const GH = 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'

/* Har card ke upar chhota "website screenshot" (pure CSS, koi image nahi chahiye) */
function Window({ kind }) {
  const bar = (
    <div className="pv-bar"><i /><b /><b /><b /><u /></div>
  )

  if (kind === 'hex') {
    return (
      <div className="pv pv-dark pv-hex">
        {bar}
        <div className="pv-hero">
          <div>
            <small>SOCIAL PLATFORM</small>
            <h4>HEX Connect</h4>
            <span className="pv-btn" />
          </div>
          <div className="pv-chart">
            {[40, 58, 48, 72, 62, 88].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}
          </div>
        </div>
        <div className="pv-sheet"><span /><span /></div>
      </div>
    )
  }

  if (kind === 'nexus') {
    return (
      <div className="pv pv-dark pv-nexus">
        {bar}
        <div className="pv-hero">
          <div>
            <h4>Nexus AI</h4>
            <p>Think beyond<br />the ordinary.</p>
            <span className="pv-btn" />
          </div>
          <svg viewBox="0 0 100 80" className="pv-iso" aria-hidden="true">
            <polygon points="50,12 88,32 50,52 12,32" fill="#e8705c" />
            <polygon points="50,28 88,48 50,68 12,48" fill="#e0553f" opacity=".85" />
            <polygon points="50,44 88,62 50,80 12,62" fill="#f2a193" opacity=".7" />
          </svg>
        </div>
        <div className="pv-sheet"><span /><span /></div>
      </div>
    )
  }

  if (kind === 'portfolio') {
    return (
      <div className="pv pv-light pv-port">
        {bar}
        <div className="pv-hero">
          <div>
            <h4>Developer<br />Portfolio</h4>
            <span className="pv-btn dark" />
          </div>
          <div className="pv-video"><i /></div>
        </div>
        <div className="pv-thumbs"><i /><i /><i /><i /></div>
      </div>
    )
  }

  if (kind === 'veloop') {
    return (
      <div className="pv pv-light pv-velo">
        {bar}
        <div className="pv-dash">
          <div className="pv-side"><i /><i /><i /><i /></div>
          <div className="pv-main">
            <span className="pv-line" /><span className="pv-line short" />
            <div className="pv-stats"><i /><i /><i /></div>
            <div className="pv-progress"><b /></div>
          </div>
          <div className="pv-phone"><i /><i /></div>
        </div>
      </div>
    )
  }

  if (kind === 'weather') {
    return (
      <div className="pv pv-light pv-weather">
        {bar}
        <div className="pv-hero">
          <div>
            <h4>Weather<br />Dashboard</h4>
            <span className="pv-btn dark" />
          </div>
          <div className="pv-sun"><i /></div>
        </div>
        <div className="pv-thumbs"><i /><i /><i /><i /></div>
      </div>
    )
  }

  return (
    <div className="pv pv-dark pv-dsa">
      {bar}
      <div className="pv-hero">
        <div>
          <small>C++ · DSA</small>
          <h4>DSA Visualizer</h4>
          <span className="pv-btn" />
        </div>
        <div className="pv-chart">
          {[30, 80, 50, 95, 40, 65, 55].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}
        </div>
      </div>
      <div className="pv-sheet"><span /><span /></div>
    </div>
  )
}

const tints = {
  hex: '#dde5f3', nexus: '#dfe3ea', portfolio: '#ece3d4',
  veloop: '#e1ebe4', weather: '#dbe7f4', dsa: '#e5dff0',
}

/* Har card ka preview: tinted stage + upar browser window + phone (3D depth) */
function Preview({ kind }) {
  return (
    <div className="pv-stage" style={{ '--tint': tints[kind] || '#e4e1da' }}>
      <div className="pv-glow" />
      <Window kind={kind} />
      <div className="pv-phone-mock">
        <i />
        <div><b /><b /><b /><u /></div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return projects
    return projects.filter((p) =>
      [p.title, p.desc, ...p.tags].join(' ').toLowerCase().includes(q),
    )
  }, [query])

  return (
    <section id="projects" className="page-section projects">
      <div className="projects-inner">
        <div className="projects-head">
          <h2 data-reveal>SELECTED PROJECTS</h2>

          <label className="projects-search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>
            <input
              type="search"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search projects"
            />
            <button type="button" onClick={() => setQuery('')}>Clear <span>→</span></button>
          </label>
        </div>

        <div className="projects-grid" data-reveal style={{ '--d': '120ms' }}>
          {visible.map((p) => (
            <Tilt as="article" max={5} className="project-card" key={p.title}>
              <Preview kind={p.preview} />

              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>

                <div className="project-tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>

                <div className="project-links">
                  <a href={p.live || '#'} target="_blank" rel="noreferrer">View Project <span>→</span></a>
                  <a href={p.github || profile.github} target="_blank" rel="noreferrer">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d={GH} fill="currentColor" /></svg>
                    GitHub
                  </a>
                </div>
              </div>
            </Tilt>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="projects-empty">Koi project nahi mila “{query}”.</p>
        )}

        <div className="dashes"><i /><i /><i className="on" /></div>
      </div>
    </section>
  )
}