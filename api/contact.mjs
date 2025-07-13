import { Resend } from 'resend';
import { promises as fs } from 'fs';
import path from 'path';

const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);

// Cloudflare Turnstile verification function
async function verifyTurnstile(token) {
  const secretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.error("Cloudflare secret key is not set.");
    return false;
  }

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: secretKey,
      response: token,
    }),
  });

  const data = await response.json();
  return data.success;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message, "cf-turnstile-response": turnstileToken } = req.body;
  const isHuman = await verifyTurnstile(turnstileToken);
  if (!isHuman) {
    return res.status(403).json({ error: 'CAPTCHA verification failed.' });
  }

  try {
    // Read and prepare the email template
    const templatePath = path.join(process.cwd(), 'api', 'format.html');
    const htmlTemplate = await fs.readFile(templatePath, 'utf-8');
    const htmlForUser = htmlTemplate.replace(/\$\{name\}/g, name);

    await resend.emails.send({
      from: 'info@support.2care.ai',
      to: email,
      subject: '💙 We’ve Got Your Message — We’re Here for You!',
      html: htmlForUser
    });

    // Send to support
    await resend.emails.send({
      from: 'info@support.2care.ai',
      to: 'support@2care.ai',
      subject: `New message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
