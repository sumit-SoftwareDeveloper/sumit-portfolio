import { profile } from '../data'
import './About.css'

const highlights = [
  { title: 'Problem solving', text: 'Strengthening logic through C++ and DSA.' },
  { title: 'Building projects', text: 'Turning ideas into practical web experiences.' },
  { title: 'Continuous learning', text: 'Exploring tools and technologies step by step.' },
]

const interests = ['Frontend Development', 'C++ & DSA', 'UI/UX', 'AI & Innovation']

export default function About() {
  return (
    <section id="about" className="page-section about">
      <div className="about-inner">
        <div className="diamond-divider"><b /><span /><em /><span /><b /></div>
        <h2 data-reveal>ABOUT ME</h2>

        <div className="about-grid" data-reveal style={{ '--d': '120ms' }}>
          <div className="about-lead">
            <h3>
              Not just learning to code.
              <br />
              <span>Learning to create.</span>
            </h3>
            <p>
              I’m a Computer Science engineering student with a growing interest in
              software development, thoughtful design, and solving real-world problems
              through technology.
            </p>
            <p>
              I enjoy exploring how things work, experimenting with ideas, and improving
              through every project I build. My focus is on strong fundamentals and
              digital experiences that are useful, accessible, and enjoyable.
            </p>

            <div className="about-tags">
              {interests.map((i) => <span key={i}>{i}</span>)}
            </div>

            <a className="about-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              Connect with me on LinkedIn <span>→</span>
            </a>
          </div>

          <div className="about-cards">
            {highlights.map((h, i) => (
              <article key={h.title}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <div><h4>{h.title}</h4><p>{h.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}