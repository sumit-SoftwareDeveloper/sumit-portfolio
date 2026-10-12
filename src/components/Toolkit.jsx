import Tilt from './Tilt'
import './Toolkit.css'

const GH = 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'

const icons = {
  cpp: (
    <svg viewBox="0 0 64 64">
      <defs>
        <linearGradient id="gCpp" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4d86d6" /><stop offset="1" stopColor="#1f4f9f" />
        </linearGradient>
      </defs>
      <path d="M32 3 56 17v30L32 61 8 47V17z" fill="url(#gCpp)" />
      <path d="M43 25a13 13 0 1 0 0 14" fill="none" stroke="#fff" strokeWidth="6.5" strokeLinecap="round" />
      <path d="M44 32h8M48 28v8M54 32h6M57 29v6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" transform="translate(-5 0) scale(.9) translate(5 3)" />
    </svg>
  ),
  html: (
    <svg viewBox="0 0 64 64">
      <text x="32" y="12" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="11" fill="#2b2b2b">HTML</text>
      <path d="M10 17h44l-4 38-18 6-18-6z" fill="#e8622c" />
      <path d="M32 21v36l14.5-4.8L49.7 21z" fill="#f2814f" />
      <text x="32" y="46" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="29" fill="#fff">5</text>
    </svg>
  ),
  css: (
    <svg viewBox="0 0 64 64">
      <text x="32" y="12" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="11" fill="#2b2b2b">CSS</text>
      <path d="M10 17h44l-4 38-18 6-18-6z" fill="#2a6fc2" />
      <path d="M32 21v36l14.5-4.8L49.7 21z" fill="#3f8be0" />
      <text x="32" y="46" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="29" fill="#fff">3</text>
    </svg>
  ),
  js: (
    <svg viewBox="0 0 64 64">
      <rect x="6" y="6" width="52" height="52" rx="3" fill="#f7d916" />
      <text x="52" y="52" textAnchor="end" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="25" fill="#1d1d1d">JS</text>
    </svg>
  ),
  react: (
    <svg viewBox="-32 -32 64 64" fill="none" stroke="#3fb7e6" strokeWidth="2.4">
      <ellipse rx="27" ry="10.5" />
      <ellipse rx="27" ry="10.5" transform="rotate(60)" />
      <ellipse rx="27" ry="10.5" transform="rotate(120)" />
      <circle r="4.2" fill="#3fb7e6" stroke="none" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24"><path d={GH} fill="#16161a" /></svg>
  ),
  responsive: (
    <svg viewBox="0 0 64 64" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 12h22l10 10v14" stroke="#4a4a52" strokeWidth="3" />
      <path d="M16 12v40h16" stroke="#4a4a52" strokeWidth="3" />
      <path d="M38 12v10h10" stroke="#4a4a52" strokeWidth="3" />
      <path d="M22 26h12M22 33h8M22 40h6" stroke="#8a8a92" strokeWidth="2.6" />
      <path d="M10 22 16 14l6 8" stroke="#3f7fe0" strokeWidth="2.6" />
      <circle cx="42" cy="42" r="9" fill="#e9f1fb" stroke="#3f7fe0" strokeWidth="3" />
      <path d="m49 49 8 8" stroke="#3f7fe0" strokeWidth="4" />
    </svg>
  ),
  api: (
    <svg viewBox="0 0 64 64" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="8" width="38" height="44" rx="6" stroke="#3b3b44" strokeWidth="3.4" />
      <path d="M9 18h38" stroke="#3b3b44" strokeWidth="3" />
      <text x="28" y="39" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="17" fill="#23232a">API</text>
      <circle cx="47" cy="47" r="11" fill="#3f7fe0" />
      <path d="m42 47 3.6 3.8L52 43" stroke="#fff" strokeWidth="3" />
    </svg>
  ),
}

const skills = [
  { name: 'C++', icon: 'cpp' },
  { name: 'HTML5', icon: 'html' },
  { name: 'CSS3', icon: 'css' },
  { name: 'JavaScript', icon: 'js' },
  { name: 'React', icon: 'react' },
  { name: 'GitHub', icon: 'github' },
  { name: 'Responsive Design', icon: 'responsive' },
  { name: 'API Integration', icon: 'api' },
]

export default function Toolkit() {
  return (
    <section id="toolkit" className="page-section toolkit">
      <div className="toolkit-inner">
        <div className="diamond-divider"><b /><span /><em /><span /><b /></div>
        <h2 data-reveal>TECHNICAL TOOLKIT</h2>

        <div className="toolkit-grid" data-reveal style={{ '--d': '120ms' }}>
          {skills.map((s) => (
            <Tilt as="article" max={9} className="tool-card" key={s.name} tabIndex={0}>
              <div className="tool-icon">{icons[s.icon]}</div>
              <h3>{s.name}</h3>
            </Tilt>
          ))}
        </div>

        <div className="dashes"><i /><i className="on" /><i /></div>
      </div>
    </section>
  )
}