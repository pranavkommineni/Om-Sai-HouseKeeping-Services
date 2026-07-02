import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { siteConfig } from '@/data/siteConfig';

export const runtime = 'nodejs';

interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

function buildTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, EMAIL_USER, EMAIL_PASS } =
    process.env;

  // Preferred: any SMTP provider (SendGrid, Zoho, Outlook, custom host, etc.)
  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    return nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT ? Number(SMTP_PORT) : 587,
      secure: SMTP_SECURE === 'true',
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
  }

  // Simple fallback: Gmail with an App Password.
  if (EMAIL_USER && EMAIL_PASS) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });
  }

  return null;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req: Request) {
  let body: Partial<ContactPayload>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = (body.name || '').trim();
  const phone = (body.phone || '').trim();
  const email = (body.email || '').trim();
  const service = (body.service || '').trim();
  const message = (body.message || '').trim();

  if (!name || !phone || !email) {
    return NextResponse.json(
      { error: 'Name, phone, and email are required.' },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const transporter = buildTransporter();

  if (!transporter) {
    console.error(
      'Email service is not configured. Set SMTP_HOST/SMTP_USER/SMTP_PASS or EMAIL_USER/EMAIL_PASS in your environment.',
    );
    return NextResponse.json(
      { error: 'Email service is not configured yet. Please call or WhatsApp us instead.' },
      { status: 500 },
    );
  }

  const toAddress = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const fromAddress = process.env.SMTP_USER || process.env.EMAIL_USER || siteConfig.email;

  try {
    await transporter.sendMail({
      from: `"On Sai Website" <${fromAddress}>`,
      to: toAddress,
      replyTo: email,
      subject: `New Booking Request — ${service || 'General Enquiry'} (${name})`,
      text: [
        `New booking request from the On Sai website contact form:`,
        ``,
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Service Required: ${service || 'Not specified'}`,
        `Message: ${message || '—'}`,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; max-width: 560px;">
          <h2 style="color:#12539E; margin-bottom: 4px;">New Booking Request</h2>
          <p style="color:#64748b; margin-top: 0;">Received from the On Sai House Keeping Services website.</p>
          <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding:8px 0; font-weight:bold; width:140px;">Name</td><td style="padding:8px 0;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0; font-weight:bold;">Phone</td><td style="padding:8px 0;">${escapeHtml(phone)}</td></tr>
            <tr><td style="padding:8px 0; font-weight:bold;">Email</td><td style="padding:8px 0;">${escapeHtml(email)}</td></tr>
            <tr><td style="padding:8px 0; font-weight:bold;">Service Required</td><td style="padding:8px 0;">${escapeHtml(service || 'Not specified')}</td></tr>
            <tr><td style="padding:8px 0; font-weight:bold; vertical-align: top;">Message</td><td style="padding:8px 0;">${escapeHtml(message || '—').replace(/\n/g, '<br/>')}</td></tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Failed to send contact email:', err);
    return NextResponse.json(
      { error: 'Could not send your message right now. Please call or WhatsApp us instead.' },
      { status: 500 },
    );
  }
}
