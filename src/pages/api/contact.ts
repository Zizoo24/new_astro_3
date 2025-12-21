import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
const NOTIFICATION_EMAIL = import.meta.env.NOTIFICATION_EMAIL || 'info@onlinetranslation.ae';
const FROM_EMAIL = import.meta.env.FROM_EMAIL || 'forms@onlinetranslation.ae';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const { name, email, phone, message, service, document_type, source_page } = data;

    // Validate required fields
    if (!name || !email) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Name and email are required'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check if Resend API key is configured
    if (!RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not configured - email will not be sent');
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Email service not configured. Please contact us via WhatsApp.',
          fallback: 'whatsapp'
        }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    // Format the email content
    const serviceLabel = service || document_type || 'Not specified';
    const timestamp = new Date().toLocaleString('en-AE', {
      timeZone: 'Asia/Dubai',
      dateStyle: 'full',
      timeStyle: 'short'
    });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a365d; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
        </div>

        <div style="padding: 30px; background: #f8f9fa;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 140px;">Name:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <a href="mailto:${email}" style="color: #1a365d;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Phone:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                ${phone ? `<a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="color: #25d366;">${phone}</a>` : 'Not provided'}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Service:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${serviceLabel}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Source Page:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">${source_page || 'Unknown'}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 20px; background: white; border-radius: 8px;">
            <h3 style="margin: 0 0 10px; color: #1a365d;">Message:</h3>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message || 'No message provided'}</p>
          </div>
        </div>

        <div style="padding: 20px; background: #1a365d; color: white; text-align: center; font-size: 12px;">
          <p style="margin: 0;">Submitted on ${timestamp} (Dubai Time)</p>
          <p style="margin: 10px 0 0;">OnlineTranslation.ae - MOJ Certified Legal Translation</p>
        </div>
      </div>
    `;

    const emailText = `
New Contact Form Submission
============================

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service: ${serviceLabel}
Source: ${source_page || 'Unknown'}

Message:
${message || 'No message provided'}

Submitted: ${timestamp} (Dubai Time)
    `;

    // Send email
    const { data: emailData, error } = await resend.emails.send({
      from: `OnlineTranslation.ae <${FROM_EMAIL}>`,
      to: [NOTIFICATION_EMAIL],
      replyTo: email,
      subject: `New Inquiry from ${name} - ${serviceLabel}`,
      html: emailHtml,
      text: emailText,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Failed to send email. Please try WhatsApp instead.',
          fallback: 'whatsapp'
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log('Email sent successfully:', emailData?.id);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you! Your message has been sent. We will respond within 2 hours during business hours.',
        id: emailData?.id
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'An error occurred. Please try WhatsApp instead.',
        fallback: 'whatsapp'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
