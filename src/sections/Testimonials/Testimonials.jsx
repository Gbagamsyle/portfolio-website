import './Testimonials.css'
import { testimonials } from '../../data/siteData'

export default function Testimonials({ activeIndex = 0, setActiveIndex = () => {} }) {
  const activeTestimonial = testimonials[activeIndex]

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-label testimonial-label">Client Testimonials</div>
      <div className="testi-wrap reveal">
        <div id="testi-text">
          <p className="testi-quote" id="testi-q">{activeTestimonial.q}</p>
          <div className="testi-author">
            <span className="testi-name" id="testi-name">{activeTestimonial.name}</span>
            <span className="testi-role" id="testi-role">{activeTestimonial.role}</span>
          </div>
        </div>

        <div className="testi-dots">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              className={`testi-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
