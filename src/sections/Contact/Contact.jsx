import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="contact-grid">
          <div className="contact-intro">
            <div className="section-label reveal contact-label">Start a conversation</div>
            <h2 className="section-title reveal contact-title">Have a product worth building?</h2>
            <p className="section-sub reveal contact-sub">Tell me where you are, what you are trying to solve, and what success looks like. I will help you find the clearest path from idea to launch.</p>
            <a href="mailto:ogabasyle@gmail.com" className="contact-email reveal"><span className="contact-email-address">ogabasyle@gmail.com</span><span className="contact-email-arrow" aria-hidden="true">↗</span></a>
            <div className="contact-note reveal"><span className="contact-dot" /> Usually replies within 1 business day</div>
          </div>

          <form className="contact-form reveal" onSubmit={(event) => event.preventDefault()}>
            <div className="form-heading">Project inquiry <span>01 / 03</span></div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input id="contact-name" type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input id="contact-email" type="email" placeholder="john@company.com" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">What are you building?</label>
              <input id="contact-subject" type="text" placeholder="A new digital product" />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">A little more detail</label>
              <textarea id="contact-message" rows="5" placeholder="Tell me about the challenge, timeline, or goal..."></textarea>
            </div>

            <button type="submit" className="form-submit">Send inquiry <span aria-hidden="true">-&gt;</span></button>
          </form>
        </div>
      </div>
    </section>
  )
}
