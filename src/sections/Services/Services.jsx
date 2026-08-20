import './Services.css'
import { services } from '../../data/siteData'

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-inner">
        <div className="services-head reveal">
          <div>
            <div className="section-label">What I Do</div>
            <h2 className="section-title">Services</h2>
          </div>
          <p className="section-sub">Every project is a chance to build something that outlasts a trend. I focus on craft, speed, and results.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card reveal" key={service.title}>
              <div className="service-num">{String(index + 1).padStart(2, '0')}</div>
              <div className="service-name">{service.title}</div>
              <p className="service-desc">{service.desc}</p>
              <span className="service-arrow">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
