const { body, validationResult } = require('express-validator');

const handleValidation = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const error = new Error('Validation failed');
  error.statusCode = 400;
  error.details = errors.array().map(({ path, msg }) => ({
    field: path,
    message: msg,
  }));

  return next(error);
};

const contactRules = [
  body('name')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters long'),
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('subject')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 200 })
    .withMessage('Subject cannot exceed 200 characters'),
  body('message')
    .trim()
    .isLength({ min: 10 })
    .withMessage('Message must be at least 10 characters long'),
  handleValidation,
];

const projectRules = [
  body('title')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Title must be between 2 and 100 characters'),
  body('description')
    .trim()
    .isLength({ min: 10, max: 500 })
    .withMessage('Description must be between 10 and 500 characters'),
  body('technologies')
    .isArray({ min: 1 })
    .withMessage('At least one technology is required'),
  body('technologies.*')
    .trim()
    .isString()
    .notEmpty()
    .withMessage('Each technology must be a non-empty string'),
  body('imageUrl')
    .trim()
    .isURL()
    .withMessage('Image URL must be a valid URL'),
  body('demoUrl')
    .optional({ checkFalsy: true })
    .trim()
    .isURL()
    .withMessage('Demo URL must be a valid URL'),
  body('repoUrl')
    .optional({ checkFalsy: true })
    .trim()
    .isURL()
    .withMessage('Repo URL must be a valid URL'),
  body('featured')
    .optional()
    .isBoolean()
    .withMessage('Featured must be a boolean'),
  handleValidation,
];

const projectUpdateRules = [
  body('title')
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Title must be between 2 and 100 characters'),
  body('description')
    .optional()
    .trim()
    .isLength({ min: 10, max: 500 })
    .withMessage('Description must be between 10 and 500 characters'),
  body('technologies')
    .optional()
    .isArray({ min: 1 })
    .withMessage('Technologies must be a non-empty array'),
  body('technologies.*')
    .optional()
    .trim()
    .isString()
    .notEmpty()
    .withMessage('Each technology must be a non-empty string'),
  body('imageUrl')
    .optional()
    .trim()
    .isURL()
    .withMessage('Image URL must be a valid URL'),
  body('demoUrl')
    .optional({ checkFalsy: true })
    .trim()
    .isURL()
    .withMessage('Demo URL must be a valid URL'),
  body('repoUrl')
    .optional({ checkFalsy: true })
    .trim()
    .isURL()
    .withMessage('Repo URL must be a valid URL'),
  body('featured')
    .optional()
    .isBoolean()
    .withMessage('Featured must be a boolean'),
  handleValidation,
];

const skillRules = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Skill name must be between 2 and 50 characters'),
  body('category')
    .trim()
    .isIn(['Frontend', 'Backend', 'Fullstack', 'DevOps', 'Design', 'Tools'])
    .withMessage('Skill category is invalid'),
  body('proficiency')
    .isInt({ min: 1, max: 100 })
    .withMessage('Proficiency must be an integer between 1 and 100'),
  body('icon')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Icon is required'),
  handleValidation,
];

const skillUpdateRules = [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Skill name must be between 2 and 50 characters'),
  body('category')
    .optional()
    .trim()
    .isIn(['Frontend', 'Backend', 'Fullstack', 'DevOps', 'Design', 'Tools'])
    .withMessage('Skill category is invalid'),
  body('proficiency')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Proficiency must be an integer between 1 and 100'),
  body('icon')
    .optional()
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Icon cannot be empty'),
  handleValidation,
];

module.exports = {
  contactRules,
  projectRules,
  projectUpdateRules,
  skillRules,
  skillUpdateRules,
};
