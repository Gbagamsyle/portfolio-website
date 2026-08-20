import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="section-label reveal contact-label">Get In Touch</div>
        <h2 className="section-title reveal contact-title">Ready to build something great?</h2>
        <p className="section-sub reveal contact-sub">Whether you have a project in mind or just want to say hello — my inbox is always open.</p>
        <a href="mailto:ogaba.silas@email.com" className="contact-email reveal">ogaba.silas@email.com</a>

        <div className="contact-form reveal">
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@company.com" />
            </div>
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Project Inquiry" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Tell me about your project..."></textarea>
          </div>

          <button className="form-submit">Send Message</button>
        </div>
      </div>
    </section>
  )
}
