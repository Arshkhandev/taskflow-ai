import { body } from "express-validator";

export const generateTasksValidation = [
  body("goal")
    .trim()
    .notEmpty()
    .withMessage("Goal is required.")
    .isLength({ min: 5, max: 300 })
    .withMessage("Goal must be between 5 and 300 characters."),
];