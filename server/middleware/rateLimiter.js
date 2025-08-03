const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100, // limit each IP to 100 requests per window
    message: "Too many requests, please try again later.",
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = { apiLimiter };