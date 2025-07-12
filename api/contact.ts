import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASS,
    },
  });

  try {
    // 1. Send email to your support team
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'support@2care.ai',
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp Number:</strong> ${phone}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    // 2. Send "Thank You" email to the user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for contacting 2care.ai!',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and our team will get back to you shortly.</p>
        <p>Best regards,<br/>The 2care.ai Team</p>
      `,
    });

    return res.status(200).json({ success: true, message: 'Emails sent successfully!' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Failed to send emails.' });
  }
}