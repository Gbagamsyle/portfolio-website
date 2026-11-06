import './Testimonials.css'
import { testimonials } from '../../data/siteData'

export default function Testimonials({ activeIndex = 0, setActiveIndex = () => {} }) {
  const activeTestimonial = testimonials[activeIndex]

  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="section-label testimonial-label" id="testimonials-heading">Client Testimonials</h2>
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
              type="button"
              aria-label={`Show testimonial ${index + 1} of ${testimonials.length} from ${item.name}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              <span className="visually-hidden">Show testimonial {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
