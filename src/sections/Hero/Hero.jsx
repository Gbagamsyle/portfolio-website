import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg" />
      <div className="hero-lines" />
      <div className="hero-inner">
        <div className="hero-eyebrow"><span className="hero-status-dot" /> Open to new opportunities</div>
        <h1 className="hero-name">Ogaba<br /><em>Silas</em></h1>
        <p className="hero-role">Frontend Developer &amp; Fullstack Engineer building fast, accessible digital products that help ambitious teams move from idea to launch.</p>
        <div className="hero-actions">
          <a href="#work" className="btn-primary">View Selected Work</a>
          <a href="#contact" className="btn-secondary">Start a Conversation</a>
        </div>

        <div className="hero-tag">
          <div className="hero-stat">
            <div className="hero-stat-num">5+</div>
            <div className="hero-stat-label">Years experience</div>
          </div>
          <div className="hero-divider" />
          <div className="hero-stat">
            <div className="hero-stat-num">40+</div>
            <div className="hero-stat-label">Projects delivered</div>
          </div>
          <div className="hero-divider" />
          <div className="hero-stat">
            <div className="hero-stat-num">20+</div>
            <div className="hero-stat-label">Clients served</div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
