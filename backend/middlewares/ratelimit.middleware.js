import rateLimit from "express-rate-limit";

const loginRateLimiter = rateLimit({
  windowMs: 60 * 1000 * 15, // 15 minutes
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many login attempts, please try again later.",
  },
});

export { loginRateLimiter };
