import './Work.css'
import { projects } from '../../data/siteData'

export default function Work() {
  return (
    <section id="work" className="work-section">
      <div className="work-head reveal">
        <div>
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Selected Work</h2>
        </div>
        <a href="#contact" className="btn-secondary work-link">All Projects →</a>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <a href={`/projects/${project.slug}`} className={`work-card reveal${project.title === 'Metsad Engineering Services' ? ' work-card--metsad' : ''}`} key={project.title} style={{ backgroundImage: `linear-gradient(to top, rgba(13, 14, 19, 0.95) 0%, rgba(13, 14, 19, 0.05) 65%), url('${project.background}')` }}>
            <div className="work-card-bg">{String(index + 1).padStart(2, '0')}</div>
            <div className="work-card-tag">{project.category}</div>
            <div className="work-card-overlay" />
            <div className="work-card-info">
              <div className="work-card-title">{project.title}</div>
              <div className="work-card-sub">{project.description}</div>
                    <span className="work-card-link">View Project →</span>
            </div>
                  </a>
        ))}
      </div>
    </section>
  )
}
