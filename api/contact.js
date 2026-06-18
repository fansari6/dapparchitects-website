import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, interest, message } = req.body || {};

  // Required fields
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: 'Name, email, and message are required.' });
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .json({ error: 'Please provide a valid email address.' });
  }

  // Basic anti-abuse length caps
  if (
    name.length > 200 ||
    email.length > 200 ||
    (company || '').length > 200 ||
    message.length > 5000
  ) {
    return res.status(400).json({ error: 'Submission too long.' });
  }

  const subject = `New inquiry from ${name}${company ? ` at ${company}` : ''}`;

  const textBody = `New contact form submission — dapparchitects.com

Name:     ${name}
Email:    ${email}
Company:  ${company || '—'}
Interest: ${interest || '—'}

Message:
${message}
`;

  const htmlBody = `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
  <h2 style="color:#ff8000;border-bottom:2px solid #ff8000;padding-bottom:8px;margin-bottom:4px;">New Contact Form Submission</h2>
  <p style="color:#888;font-size:12px;margin-top:0;">From dapparchitects.com</p>
  <table style="width:100%;border-collapse:collapse;margin-top:16px;">
    <tr><td style="padding:6px 0;color:#666;width:120px;"><strong>Name</strong></td><td style="padding:6px 0;">${esc(name)}</td></tr>
    <tr><td style="padding:6px 0;color:#666;"><strong>Email</strong></td><td style="padding:6px 0;"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
    <tr><td style="padding:6px 0;color:#666;"><strong>Company</strong></td><td style="padding:6px 0;">${esc(company || '—')}</td></tr>
    <tr><td style="padding:6px 0;color:#666;"><strong>Interest</strong></td><td style="padding:6px 0;">${esc(interest || '—')}</td></tr>
  </table>
  <div style="margin-top:20px;padding-top:16px;border-top:1px solid #eee;">
    <p style="color:#666;margin:0 0 6px;"><strong>Message:</strong></p>
    <p style="white-space:pre-wrap;line-height:1.6;margin:0;">${esc(message)}</p>
  </div>
</div>`;

  try {
    await sgMail.send({
      to: process.env.CONTACT_TO_EMAIL,
      from: process.env.CONTACT_FROM_EMAIL,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('SendGrid error:', err?.response?.body || err);
    return res.status(500).json({
      error:
        'Failed to send message. Please try again later or email info@dapparchitects.com directly.',
    });
  }
}

function esc(s) {
  if (typeof s !== 'string') return '';
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
