import { Resend } from 'resend';
import { promises as fs } from 'fs';
import path from 'path';
import pool, { initDatabase } from './db.mjs';
import { google } from 'googleapis'; // Add this import

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

  const { name, email, phone, message, "cf-turnstile-response": turnstileToken } = req.body;
  const isHuman = await verifyTurnstile(turnstileToken);
  if (!isHuman) {
    return res.status(403).json({ error: 'CAPTCHA verification failed.' });
  }
  

  try {
    // Read and prepare the email template
    const templatePath = path.join(process.cwd(), 'api', 'format.html');
    const htmlTemplate = await fs.readFile(templatePath, 'utf-8');
    const htmlForUser = (htmlTemplate || "").replace(/\$\{name\}/g, name || "");

    await resend.emails.send({
      from: 'info@support.2care.ai',
      to: email,
      subject: '👋 Thank You for Reaching Out to 2care.ai — Let’s Stay in Touch!',
      html: htmlForUser,
    });

    // Send to support
    await resend.emails.send({
      from: 'info@support.2care.ai',
      to: 'support@2care.ai',
      subject: `New message from ${name}`,
      html: `<p><strong>Form_type: contact</strong></p><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong><br/>${message}</p>`,
    });

    await initDatabase(); // Ensures table exists
    const connection = await pool.getConnection();
    try {
      await connection.query(
        'INSERT INTO form_submissions (form_type, name, email, phone, message) VALUES (?, ?, ?, ?, ?)',
        ['contact', name, email, phone || null, message]
      );
    } finally {
      connection.release();
    }

    // Google Sheets Integration
    if (!process.env.GOOGLE_PRIVATE_KEY) {
      throw new Error("GOOGLE_PRIVATE_KEY is not set in environment variables");
    }

    console.log("GOOGLE_CLIENT_EMAIL:", process.env.GOOGLE_CLIENT_EMAIL);
    console.log("GOOGLE_PRIVATE_KEY present:", !!process.env.GOOGLE_PRIVATE_KEY);
    console.log("SPREADSHEET_ID:", process.env.SPREADSHEET_ID);
    console.log("SHEET_GID_0:", process.env.SHEET_GID_0);

    const privateKey = process.env.GOOGLE_PRIVATE_KEY ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined;
const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
console.log("clientEmail used for JWT:", clientEmail);
console.log("privateKey starts with:", privateKey ? privateKey.slice(0, 30) : "undefined");

const auth = new google.auth.JWT(
  clientEmail,
  null,
  privateKey,
  ['https://www.googleapis.com/auth/spreadsheets']
);
console.log("Auth client email after JWT:", auth.email);

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.SPREADSHEET_ID;
    const sheetGid = process.env.SHEET_GID_0; // Use SHEET_GID_0 for contact functions sheet

    // Check existing rows and columns
    const getSheetData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `Sheet1!A1:E`, // Base range, gid will be handled by API
    });

    const values = getSheetData.data.values || [];
    const headers = values[0] || ['Name', 'Email', 'Phone', 'Message', 'Timestamp']; // Default headers
    const rowCount = values.length;

    // Prepare data to append or update
    const newRow = [name, email, phone || '', message, new Date().toISOString()];
    let rangeToUpdate;

    if (rowCount === 0) {
      // If no data, add headers and the new row
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `Sheet!A1:E1?gid=${sheetGid}`, // Include gid for specific sheet
        valueInputOption: 'RAW',
        resource: { values: [headers] },
      });
      rangeToUpdate = `Sheet!A2:E2?gid=${sheetGid}`;
    } else {
      // Append to the next row
      rangeToUpdate = `Sheet!A${rowCount + 2}:E${rowCount + 2}?gid=${sheetGid}`; // +2 because headers are in row 1
    }

    // Write the new row
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: rangeToUpdate,
      valueInputOption: 'RAW',
      resource: { values: [newRow] },
    });

    return res.status(200).json({ success: true, message: 'Data saved to spreadsheet' });
  } catch (err) {
    console.error('Error:', err);
if (err && err.response && err.response.data) {
  console.error('Google API error data:', err.response.data);
}
if (err && err.config) {
  console.error('Google API error config:', err.config);
}
    return res.status(500).json({ error: 'Failed to process request' });
  }
}