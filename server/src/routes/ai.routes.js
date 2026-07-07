import express from "express";

import { generateTasks } from "../controllers/ai.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import validateRequest from "../middleware/validateRequest.js";

import {
  generateTasksValidation,
} from "../validators/ai.validator.js";

const router = express.Router();

router.post(
  "/generate-tasks",
  protect,
  generateTasksValidation,
  validateRequest,
  generateTasks
);

export default router;