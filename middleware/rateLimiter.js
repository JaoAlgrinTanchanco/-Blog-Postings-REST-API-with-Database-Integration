const rateLimit = require('express-rate-limit');
module.exports = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.',
});