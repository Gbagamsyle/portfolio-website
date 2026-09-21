import './ProjectDetail.css'
import { projects } from '../../data/siteData'

export default function ProjectDetail({ slug }) {
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="project-detail project-detail--missing">
        <div className="section-label">404 · Project not found</div>
        <h1 className="section-title">That project is not here.</h1>
        <a href="/#work" className="btn-secondary">Back to selected work</a>
      </section>
    )
  }

  return (
    <article className="project-detail">
      <div className="project-detail-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(13, 14, 19, 0.98) 0%, rgba(13, 14, 19, 0.68) 48%, rgba(13, 14, 19, 0.2) 100%), url('${project.background}')` }}>
        <div className="project-detail-hero-content">
          <a href="/#work" className="project-back">← Back to selected work</a>
          <div className="section-label">{project.category}</div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="project-actions">
            {project.liveUrl && <a className="btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer">Visit live site ↗</a>}
            {project.githubUrl && <a className="btn-secondary" href={project.githubUrl} target="_blank" rel="noreferrer">View GitHub ↗</a>}
          </div>
        </div>
      </div>

      <div className="project-detail-body">
        <div className="project-detail-overview">
          <div className="section-label">The brief</div>
          <h2>Built with purpose.</h2>
          <p>{project.overview}</p>
        </div>
        <div className="project-detail-panel">
          <div className="section-label">Technical stack</div>
          <div className="project-stack">
            {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          <div className="section-label project-highlights-label">Highlights</div>
          <ul className="project-highlights">
            {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        </div>
      </div>
    </article>
  )
}