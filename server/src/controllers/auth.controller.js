import { validationResult } from "express-validator";

import {
  registerService,
  loginService,
} from "../services/auth.service.js";

export const registerUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const result = await registerService(req.body);

  return res.status(201).json(result);
};

export const loginUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const result = await loginService(req.body);

  return res.status(200).json(result);
};