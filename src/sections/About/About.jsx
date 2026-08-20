import './About.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <div className="about-img-wrap reveal">
          <div className="about-img" role="img" aria-label="Creative office interior" />
          <div className="about-img-label">Ogaba Silas · Dev</div>
        </div>

        <div className="about-text reveal">
          <div className="section-label">About Me</div>
          <h2 className="section-title">Building Things That Actually Work</h2>
          <p>I'm a Frontend Developer and Fullstack Engineer with a passion for building fast, beautiful, and scalable web applications. I work at the intersection of design and engineering — making sure every product I touch looks as good as it performs.</p>
          <p>From pixel-perfect UIs in React and Next.js to robust backend systems with Node.js and PostgreSQL, I handle the full spectrum. I don't just write code — I solve problems and build businesses.</p>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-num" data-target="5">0</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-item">
              <span className="stat-num" data-target="40">0</span>
              <span className="stat-label">Projects Done</span>
            </div>
            <div className="stat-item">
              <span className="stat-num" data-target="20">0</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
