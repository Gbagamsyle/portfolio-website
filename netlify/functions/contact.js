function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed.' })
  }

  let formData
  try {
    formData = JSON.parse(event.body || '{}')
  } catch {
    return jsonResponse(400, { error: 'Invalid request.' })
  }

  const { name, email, subject, message } = formData
  if (![name, email, subject, message].every((value) => typeof value === 'string' && value.trim())) {
    return jsonResponse(400, { error: 'Please complete every field.' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse(400, { error: 'Please enter a valid email address.' })
  }

  if (name.length > 120 || email.length > 254 || subject.length > 200 || message.length > 5000) {
    return jsonResponse(400, { error: 'One or more fields are too long.' })
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
    return jsonResponse(500, { error: 'Email service is not configured yet.' })
  }

  try {
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
        subject: `New Portfolio Inquiry: ${subject.trim()}`,
        text: `New project inquiry\n\nName: ${name.trim()}\nEmail: ${email.trim()}\n\nProject:\n${subject.trim()}\n\nMessage:\n${message.trim()}`,
      }),
    })

    if (!resendResponse.ok) {
      return jsonResponse(502, { error: 'Your inquiry could not be sent. Please try again.' })
    }
  } catch {
    return jsonResponse(502, { error: 'Your inquiry could not be sent. Please try again.' })
  }

  return jsonResponse(200, { ok: true })
}