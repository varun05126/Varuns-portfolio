const asyncHandler = require('express-async-handler');
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// @desc    Contact form submission
// @route   POST /api/contact
// @access  Public
const contactForm = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Save to database
  const contact = await Contact.create({
    name,
    email,
    subject: subject || 'No Subject',
    message,
  });

  // Send email (using nodemailer with ethereal for testing)
  try {
    // Create a transporter
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_FROM,
      subject: `Portfolio Contact Form: ${subject || 'No Subject'}`,
      text: `You have a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'No Subject'}\n\nMessage:\n${message}`,
      html: `<p>You have a new message from your portfolio contact form:</p>
             <ul>
               <li><strong>Name:</strong> ${name}</li>
               <li><strong>Email:</strong> ${email}</li>
               <li><strong>Subject:</strong> ${subject || 'No Subject'}</li>
               <li><strong>Message:</strong> ${message.replace(/\n/g, '<br>')}</li>
             </ul>`,
    });

    console.log('Message sent: %s', info.messageId);
  } catch (emailError) {
    console.error('Error sending email:', emailError);
    // We don't fail the request if email fails, but we log it
  }

  res.status(201).json({
    success: true,
    data: contact,
  });
});

module.exports = { contactForm };