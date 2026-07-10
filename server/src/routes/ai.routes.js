import express from "express";

import {
  generateTasks,
  generateAndCreateTasks,
  breakDownTask,
  suggestPriority,
  suggestDueDate,
  improveDescription,
} from "../controllers/ai.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import validateRequest from "../middleware/validateRequest.js";

import {
  generateTasksValidation,
  generateAndCreateTasksValidation,
  breakDownTaskValidation,
  suggestPriorityValidation,
  suggestDueDateValidation,
  improveDescriptionValidation
} from "../validators/ai.validator.js";

const router = express.Router();

router.post(
  "/generate-tasks",
  protect,
  generateTasksValidation,
  validateRequest,
  generateTasks
);

router.post(
  "/generate-and-create-tasks",
  protect,
  generateAndCreateTasksValidation,
  validateRequest,
  generateAndCreateTasks
);

router.post(
  "/break-down-task",
  protect,
  breakDownTaskValidation,
  validateRequest,
  breakDownTask
);

router.post(
  "/suggest-priority",
  protect,
  suggestPriorityValidation,
  validateRequest,
  suggestPriority
);

router.post(
  "/suggest-due-date",
  protect,
  suggestDueDateValidation,
  validateRequest,
  suggestDueDate
);


router.post(
  "/improve-description",
  protect,
  improveDescriptionValidation,
  validateRequest,
  improveDescription
);
export default router;