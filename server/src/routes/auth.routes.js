import express from "express";

import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../controllers/auth.controller.js";

import {
  registerValidation,
  loginValidation,
} from "../validators/auth.validator.js";

import validateRequest from "../middleware/validateRequest.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/register",
  registerValidation,
  validateRequest,
  registerUser
);

router.post(
  "/login",
  loginValidation,
  validateRequest,
  loginUser
);

router.get(
  "/me",
  protect,
  getCurrentUser
);

export default router;