import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg" />
      <div className="hero-lines" />
      <div className="hero-inner">
        <div className="hero-eyebrow">Available for work · Based in Abuja, Nigeria</div>
        <h1 className="hero-name">Ogaba<br /><em>Silas</em></h1>
        <p className="hero-role">Frontend Developer & Fullstack Engineer crafting high-performance digital experiences that convert and inspire.</p>
        <div className="hero-actions">
          <a href="#work" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Let's Talk</a>
        </div>
      </div>

      <div className="hero-tag">
        <div className="hero-stat">
          <div className="hero-stat-num">5+</div>
          <div className="hero-stat-label">Years Exp.</div>
        </div>
        <div className="hero-divider" />
        <div className="hero-stat">
          <div className="hero-stat-num">40+</div>
          <div className="hero-stat-label">Projects</div>
        </div>
        <div className="hero-divider" />
        <div className="hero-stat">
          <div className="hero-stat-num">20+</div>
          <div className="hero-stat-label">Clients</div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
