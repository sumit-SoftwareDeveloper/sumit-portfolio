import Navbar from './Navbar'
import HeroArt from './HeroArt'
import { hero } from '../data'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="page-section hero">
      <Navbar />

      <div className="hero-inner">
        <div className="hero-copy" data-reveal>
          <span className="hero-tag">{hero.badge}</span>

          <h1>
            Turning Ideas
            <br />
            Into Useful Digital
            <br />
            Experiences
          </h1>

          <p>{hero.text}</p>

          <div className="hero-actions">
            <a className="btn btn-dark" href="#projects">VIEW PROJECTS</a>
            <a className="btn btn-outline" href="#about">LEARN MORE</a>
          </div>
        </div>

        <HeroArt />
      </div>

      <div className="dashes"><i className="on" /><i /><i /></div>
    </section>
  )
}