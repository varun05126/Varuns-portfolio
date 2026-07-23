const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log for debugging (only in non-production)
  if (process.env.NODE_ENV !== 'production') {
    console.error(err.stack);
  }

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = `Resource not found`;
    error = new Error(message);
    error.statusCode = 404;
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new Error(message);
    error.statusCode = 400;
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = new Error(message.join(', '));
    error.statusCode = 400;
  }

  // Handle validation errors from express-validator
  if (err.array) {
    // This is an array of errors from express-validator
    const message = err.array().map(err => err.msg);
    error = new Error(message.join(', '));
    error.statusCode = 400;
  }

  // In production, hide detailed error messages for 500 errors
  if (process.env.NODE_ENV === 'production' && error.statusCode === 500) {
    error.message = 'Server Error';
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
    ...(error.details ? { details: error.details } : {}),
  });
};

module.exports = errorHandler;
