const asyncHandler = require("express-async-handler");
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

const getEmailConfig = () => {
  const host = process.env.EMAIL_HOST;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO || process.env.EMAIL_FROM;

  if (!host || !user || !pass || !from || !to) {
    console.warn("SMTP configuration is incomplete.");
    return null;
  }

  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === "true",

    auth: {
      user,
      pass,
    },

    family: 4,

    tls: {
      rejectUnauthorized: false,
      minVersion: "TLSv1.2",
    },

    connectionTimeout: 60000,
    greetingTimeout: 60000,
    socketTimeout: 60000,

    logger: true,
    debug: true,
  });

  return {
    transporter,
    from,
    to,
  };
};

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

// @desc    Contact form submission
// @route   POST /api/contact
// @access  Public
const contactForm = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;

  const normalizedSubject = subject?.trim() || "Portfolio Contact";

  const contact = await Contact.create({
    name,
    email,
    subject: normalizedSubject,
    message,
  });

  let emailSent = false;

  const emailConfig = getEmailConfig();

  try {
    if (!emailConfig) {
      console.warn("SMTP variables are missing.");
    } else {
      console.log("\n========== SMTP CONFIG ==========");
      console.log({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_SECURE,
        user: process.env.EMAIL_USER,
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
      });
      console.log("=================================\n");

      console.log("Verifying SMTP server...");

      await emailConfig.transporter.verify();

      console.log("SMTP verified successfully.");

      const safeName = escapeHtml(name);
      const safeEmail = escapeHtml(email);
      const safeSubject = escapeHtml(normalizedSubject);
      const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

      const info = await emailConfig.transporter.sendMail({
        from: `"Varun Portfolio" <${emailConfig.from}>`,
        to: emailConfig.to,
        replyTo: `"${name}" <${email}>`,
        subject: `Portfolio Contact: ${normalizedSubject}`,

        text: `
New Portfolio Contact

Name: ${name}
Email: ${email}
Subject: ${normalizedSubject}

Message:

${message}
`,

        html: `
<div style="font-family:Arial,sans-serif;line-height:1.6">
<h2>New Portfolio Contact</h2>

<p><strong>Name:</strong> ${safeName}</p>

<p><strong>Email:</strong> ${safeEmail}</p>

<p><strong>Subject:</strong> ${safeSubject}</p>

<p><strong>Message:</strong></p>

<p>${safeMessage}</p>
</div>
`,
      });

      emailSent = true;

      console.log("Email sent successfully.");
      console.log("Message ID:", info.messageId);
    }
  } catch (emailError) {
    console.error("\n========== SMTP ERROR ==========");

    console.error("Name:", emailError.name);
    console.error("Message:", emailError.message);
    console.error("Code:", emailError.code);
    console.error("Command:", emailError.command);
    console.error("Response:", emailError.response);
    console.error("Response Code:", emailError.responseCode);
    console.error("Stack:", emailError.stack);

    console.error("================================\n");
  }

  res.status(201).json({
    success: true,
    message: emailSent
      ? "Message sent successfully."
      : "Message saved successfully, but email delivery failed.",
    emailSent,
    data: contact,
  });
});

module.exports = {
  contactForm,
};