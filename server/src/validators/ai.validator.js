import { body } from "express-validator";

export const generateTasksValidation = [
  body("goal")
    .trim()
    .notEmpty()
    .withMessage("Goal is required.")
    .isLength({ min: 5, max: 300 })
    .withMessage("Goal must be between 5 and 300 characters."),
];


export const generateAndCreateTasksValidation = [
  body("boardId")
    .trim()
    .notEmpty()
    .withMessage("Board ID is required.")
    .isMongoId()
    .withMessage("Invalid Board ID."),

  body("goal")
    .trim()
    .notEmpty()
    .withMessage("Goal is required.")
    .isLength({ min: 5, max: 300 })
    .withMessage(
      "Goal must be between 5 and 300 characters."
    ),
];



export const breakDownTaskValidation = [
  body("task")
    .trim()
    .notEmpty()
    .withMessage("Task is required.")
    .isLength({ min: 5, max: 200 })
    .withMessage(
      "Task must be between 5 and 200 characters."
    ),
];

export const suggestPriorityValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required.")
    .isLength({ min: 3, max: 100 })
    .withMessage(
      "Title must be between 3 and 100 characters."
    ),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage(
      "Description cannot exceed 500 characters."
    ),
];


export const suggestDueDateValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required.")
    .isLength({ min: 3, max: 100 })
    .withMessage(
      "Title must be between 3 and 100 characters."
    ),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage(
      "Description cannot exceed 500 characters."
    ),
];

export const improveDescriptionValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required.")
    .isLength({ min: 3, max: 100 })
    .withMessage(
      "Title must be between 3 and 100 characters."
    ),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required.")
    .isLength({ min: 5, max: 1000 })
    .withMessage(
      "Description must be between 5 and 1000 characters."
    ),
];