const express = require('express');
const rateLimit = require('express-rate-limit');
const router = express.Router();
const { contactForm } = require('../controllers/contactController');
const { contactRules } = require('../validators');

// Rate limiter: max 5 requests per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: 'Too many requests, please try again later.' },
});

router.route('/').post(contactLimiter, contactRules, contactForm);

module.exports = router;
