import './Contact.css'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((currentData) => ({ ...currentData, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus({ type: 'loading', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send your inquiry.')
      }

      setFormData({ name: '', email: '', subject: '', message: '' })
      setStatus({ type: 'success', message: 'Thanks. Your inquiry is on its way.' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    }
  }

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

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-heading">Project inquiry <span>01 / 03</span></div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input id="contact-name" name="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input id="contact-email" name="email" type="email" placeholder="john@company.com" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">What are you building?</label>
              <input id="contact-subject" name="subject" type="text" placeholder="A new digital product" value={formData.subject} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">A little more detail</label>
              <textarea id="contact-message" name="message" rows="5" placeholder="Tell me about the challenge, timeline, or goal..." value={formData.message} onChange={handleChange} required />
            </div>

            <button type="submit" className="form-submit" disabled={status.type === 'loading'}>
              {status.type === 'loading' ? 'Sending...' : 'Send inquiry'} <span aria-hidden="true">-&gt;</span>
            </button>
            {status.message && <p className={`form-status form-status-${status.type}`} role="status">{status.message}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
