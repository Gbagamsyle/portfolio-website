import './Services.css'
import { services } from '../../data/siteData'

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-inner">
        <div className="services-head reveal">
          <div>
            <div className="section-label">What I Do</div>
            <h2 className="section-title">From idea to impact</h2>
          </div>
          <p className="section-sub">The right product needs more than attractive screens. I bring the strategy, craft, and engineering needed to move a serious idea forward.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card reveal" key={service.title}>
              <div className="service-card-head">
                <div className="service-num">{String(index + 1).padStart(2, '0')}</div>
                <span className="service-mark" aria-hidden="true">↗</span>
              </div>
              <div className="service-kicker">{index < 2 ? 'Build' : index < 4 ? 'Improve' : 'Guide'}</div>
              <div className="service-name">{service.title}</div>
              <p className="service-desc">{service.desc}</p>
              <span className="service-arrow" aria-hidden="true">View capability →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
