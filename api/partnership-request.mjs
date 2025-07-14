import { Resend } from 'resend';
import { promises as fs } from 'fs';
import path from 'path';
import pool, { initDatabase } from './db.mjs';

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyTurnstile(token) {
  const secretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
  if (!secretKey) return false;
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret: secretKey, response: token }),
  });
  const data = await response.json();
  return data.success;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, phone, message, "cf-turnstile-response": turnstileToken } = req.body;

  const isHuman = await verifyTurnstile(turnstileToken);
  if (!isHuman) {
    return res.status(403).json({ error: 'CAPTCHA verification failed.' });
  }

  try {
    // Send notification to your team
    // await resend.emails.send({
    //   from: 'info@support.2care.ai',
    //   to: 'gsbalaguhanesh@gmail.com',
    //   subject: `New Partnership Application from ${firmName}`,
    //   html: `
    //     <h1>New Partnership Application</h1>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Firm Name:</strong> ${firmName}</p>
    //     <p><strong>Industry:</strong> ${industry}</p>
    //     <p><strong>Location:</strong> ${location}</p>
    //   `
    // });

    // Prepare and send confirmation to the user
    const templatePath = path.join(process.cwd(), 'api', 'partnership-format.html');
    const htmlTemplate = await fs.readFile(templatePath, 'utf-8');
    const htmlForUser = htmlTemplate.replace(/\$\{name\}/g, name.split(' ')[0]); // Use first name

    await resend.emails.send({
      from: 'info@support.2care.ai',
      to: email,
      subject: '🤝 Thank You for Reaching Out — Excited to Partner with You!',
      html: htmlForUser
    });

    // Add to database
    await initDatabase(); // Ensures table exists
    const connection = await pool.getConnection();
    try {
      await connection.query(
        'INSERT INTO form_submissions (form_type, name, email, phone, message) VALUES (?, ?, ?, ?, ?)',
        ['partnership_request', name, email, phone || null, message]
      );
    } finally {
      connection.release();
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}