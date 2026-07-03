import jwt from "jsonwebtoken";

import User from "../models/User.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Check Authorization Header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // No Token
  if (!token) {
    throw new ApiError(401, "Access denied. No token provided.");
  }

  // Verify Token
  let decoded;

  try {
    decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );
  } catch (error) {
    throw new ApiError(401, "Invalid or expired token.");
  }

  // Find User
  const user = await User.findById(decoded.id);

  if (!user) {
    throw new ApiError(401, "User no longer exists.");
  }

  // Attach User To Request
  req.user = user;

  next();
});