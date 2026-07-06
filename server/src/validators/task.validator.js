import { body } from "express-validator";

export const createTaskValidation = [
  body("board")
    .notEmpty()
    .withMessage("Board ID is required")
    .isMongoId()
    .withMessage("Invalid Board ID"),

  body("title")
    .trim()
    .notEmpty()
    .withMessage("Task title is required")
    .isLength({ min: 3, max: 100 })
    .withMessage(
      "Task title must be between 3 and 100 characters"
    ),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage(
      "Description cannot exceed 1000 characters"
    ),

  body("status")
    .optional()
    .isIn(["todo", "in-progress", "done"])
    .withMessage("Invalid task status"),

  body("priority")
    .optional()
    .isIn(["low", "medium", "high"])
    .withMessage("Invalid task priority"),

  body("dueDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid due date"),
];

export const updateTaskValidation = [
  body("title")
    .optional()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage(
      "Task title must be between 3 and 100 characters"
    ),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage(
      "Description cannot exceed 1000 characters"
    ),

  body("status")
    .optional()
    .isIn(["todo", "in-progress", "done"])
    .withMessage("Invalid task status"),

  body("priority")
    .optional()
    .isIn(["low", "medium", "high"])
    .withMessage("Invalid task priority"),

  body("dueDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid due date"),
];