const asyncHandler = require('express-async-handler');
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

const getEmailConfig = () => {
  const host = process.env.EMAIL_HOST;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO || process.env.EMAIL_FROM;

  if (!host || !user || !pass || !from || !to) {
    return null;
  }

  return {
    transporter: nodemailer.createTransport({
      host,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: { user, pass },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    }),
    from,
    to,
  };
};

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

// @desc    Contact form submission
// @route   POST /api/contact
// @access  Public
const contactForm = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;
  const normalizedSubject = subject?.trim() || 'Portfolio contact';

  const contact = await Contact.create({
    name,
    email,
    subject: normalizedSubject,
    message,
  });

  let emailSent = false;
  const emailConfig = getEmailConfig();

  try {
    if (emailConfig) {
      const safeName = escapeHtml(name);
      const safeEmail = escapeHtml(email);
      const safeSubject = escapeHtml(normalizedSubject);
      const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

      await emailConfig.transporter.verify();

      const info = await emailConfig.transporter.sendMail({
        from: `"Varun Portfolio" <${emailConfig.from}>`,
        to: emailConfig.to,
        replyTo: `"${name}" <${email}>`,
        subject: `Portfolio Contact: ${normalizedSubject}`,
        text: `New portfolio contact message\n\nName: ${name}\nEmail: ${email}\nSubject: ${normalizedSubject}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.5;">
            <h2>New portfolio contact message</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Subject:</strong> ${safeSubject}</p>
            <p><strong>Message:</strong></p>
            <p>${safeMessage}</p>
          </div>
        `,
      });

      emailSent = true;
      console.log('Contact email sent: %s', info.messageId);
    } else {
      console.warn('Contact saved but email skipped: SMTP environment variables are incomplete');
    }
  } catch (emailError) {
    console.error('Contact saved but email failed:', emailError.message);
  }

  res.status(201).json({
    success: true,
    message: emailSent
      ? 'Message sent successfully.'
      : 'Message saved, but email delivery failed. Check SMTP settings in Render.',
    emailSent,
    data: contact,
  });
});

module.exports = { contactForm };
