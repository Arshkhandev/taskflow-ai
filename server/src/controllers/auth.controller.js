import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
  registerService,
  loginService,
  getCurrentUserService,
} from "../services/auth.service.js";

export const registerUser = asyncHandler(async (req, res) => {
  const result = await registerService(req.body);

  return res.status(201).json(
    new ApiResponse(
      201,
      "User registered successfully",
      result
    )
  );
});

export const loginUser = asyncHandler(async (req, res) => {
  const result = await loginService(req.body);

  return res.status(200).json(
    new ApiResponse(
      200,
      "Login successful",
      result
    )
  );
});

export const getCurrentUser = asyncHandler(async (req, res) => {
  const user = await getCurrentUserService(req.user._id);

  return res.status(200).json(
    new ApiResponse(
      200,
      "Current user fetched successfully",
      user
    )
  );
});