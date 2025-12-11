import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Contact form data interface
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  package: string;
  budget?: string;
  message: string;
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+]?[\d\s-]{10,}$/;

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

// Validate form data
function validateFormData(data: ContactFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters");
  }

  if (!data.email || !emailRegex.test(data.email)) {
    errors.push("Please provide a valid email address");
  }

  if (data.phone && !phoneRegex.test(data.phone.replace(/\s/g, ""))) {
    errors.push("Please provide a valid phone number");
  }

  if (!data.projectType) {
    errors.push("Project type is required");
  }

  if (!data.package) {
    errors.push("Package selection is required");
  }

  if (!data.message || data.message.trim().length < 20) {
    errors.push("Message must be at least 20 characters");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

// Create email HTML template
function createEmailHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #6366f1, #4f46e5); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #1e1b4b; margin-bottom: 5px; display: block; font-size: 14px; }
        .value { background: white; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; }
        .message-box { background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; white-space: pre-wrap; }
        .footer { text-align: center; padding: 20px; color: #64748b; font-size: 12px; }
        .highlight { background: #6366f1; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; display: inline-block; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Web.nox - New Inquiry</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Contact Form Submission</p>
      </div>
      <div class="content">
        <div class="field">
          <span class="label">Name</span>
          <div class="value">${sanitizeInput(data.name)}</div>
        </div>
        <div class="field">
          <span class="label">Email</span>
          <div class="value"><a href="mailto:${sanitizeInput(data.email)}">${sanitizeInput(data.email)}</a></div>
        </div>
        ${data.phone ? `
        <div class="field">
          <span class="label">Phone</span>
          <div class="value"><a href="tel:${sanitizeInput(data.phone)}">${sanitizeInput(data.phone)}</a></div>
        </div>
        ` : ''}
        <div class="field">
          <span class="label">Project Type</span>
          <div class="value"><span class="highlight">${sanitizeInput(data.projectType)}</span></div>
        </div>
        <div class="field">
          <span class="label">Interested Package</span>
          <div class="value"><span class="highlight">${sanitizeInput(data.package)}</span></div>
        </div>
        ${data.budget ? `
        <div class="field">
          <span class="label">Budget Range</span>
          <div class="value">${sanitizeInput(data.budget)}</div>
        </div>
        ` : ''}
        <div class="field">
          <span class="label">Message / Requirements</span>
          <div class="message-box">${sanitizeInput(data.message)}</div>
        </div>
      </div>
      <div class="footer">
        <p>This email was sent from the Web.nox contact form.</p>
        <p>© ${new Date().getFullYear()} Web.nox</p>
      </div>
    </body>
    </html>
  `;
}

// Create plain text email
function createEmailText(data: ContactFormData): string {
  return `
NEW CONTACT FORM SUBMISSION - Web.nox
======================================

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
Project Type: ${data.projectType}
Interested Package: ${data.package}
${data.budget ? `Budget Range: ${data.budget}` : ''}

Message / Requirements:
-----------------------
${data.message}

======================================
This email was sent from the Web.nox contact form.
  `.trim();
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate form data
    const validation = validateFormData(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    // Check for required environment variables
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
      console.error("Missing email configuration environment variables");
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT, 10),
      secure: parseInt(SMTP_PORT, 10) === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"Web.nox Contact Form" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: body.email,
      subject: `New Inquiry: ${sanitizeInput(body.name)} - ${sanitizeInput(body.projectType)}`,
      text: createEmailText(body),
      html: createEmailHTML(body),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: "Method not allowed" },
    { status: 405 }
  );
}
