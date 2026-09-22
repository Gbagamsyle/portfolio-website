export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed.' })
  }

  const { name, email, subject, message } = request.body || {}
  if (![name, email, subject, message].every((value) => typeof value === 'string' && value.trim())) {
    return response.status(400).json({ error: 'Please complete every field.' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return response.status(400).json({ error: 'Please enter a valid email address.' })
  }

  if (name.length > 120 || email.length > 254 || subject.length > 200 || message.length > 5000) {
    return response.status(400).json({ error: 'One or more fields are too long.' })
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
    return response.status(500).json({ error: 'Email service is not configured yet.' })
  }

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Portfolio contact <${process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'}>`,
      to: [process.env.CONTACT_EMAIL],
      reply_to: email.trim(),
      subject: `Portfolio inquiry: ${subject.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    }),
  })

  if (!resendResponse.ok) {
    return response.status(502).json({ error: 'Your inquiry could not be sent. Please try again.' })
  }

  return response.status(200).json({ ok: true })
}