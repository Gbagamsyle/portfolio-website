import './About.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <div className="about-img-wrap reveal">
          <img className="about-img" src="/assets/syle.jpg" alt="Ogaba Silas" />
          <div className="about-img-label">Ogaba Silas · Dev</div>
        </div>

        <div className="about-text reveal">
          <div className="section-label">About Me</div>
          <h2 className="section-title">Building Things That Actually Work</h2>
          <p>I turn ambitious product ideas into digital experiences people want to use and businesses can rely on. As a frontend developer and fullstack engineer, I combine thoughtful interfaces with dependable systems to help founders move from rough concept to confident launch.</p>
          <p>From shaping product direction and translating ideas into intuitive interfaces to building the systems that make them reliable, I stay close to the real problem: understand the goal, simplify the experience, and ship work that performs in the real world.</p>

          <div className="about-cta">
            <a href="#contact" className="btn-primary">Tell Me About Your Project</a>
            <a href="#work" className="btn-secondary">See My Work</a>
          </div>
          <div className="about-trust">Clear communication <span /> Reliable delivery <span /> Built to scale</div>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-num">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">40+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">20+</span>
              <span className="stat-label">Clients Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
