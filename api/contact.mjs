// import { Resend } from 'resend';

// const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  try {
    // Send to user
    // await resend.emails.send({
    //   from: 'info@support.2care.ai',
    //   to: email,
    //   subject: 'We got your message!',
    //   html: `<p>Hi ${name},</p><p>Thanks for contacting 2Care. We’ll get back to you soon!</p>`
    // });

    // // Send to support
    // await resend.emails.send({
    //   from: 'info@support.2care.ai',
    //   to: 'gsbalaguhanesh@gmail.com',
    //   subject: `New message from ${name}`,
    //   html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`
    // });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
