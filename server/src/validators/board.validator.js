import { body } from "express-validator";

export const createBoardValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Board title is required")
    .isLength({ min: 3, max: 100 })
    .withMessage("Board title must be between 3 and 100 characters"),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Description cannot exceed 500 characters"),

  body("color")
    .optional()
    .isHexColor()
    .withMessage("Invalid board color"),
];

export const updateBoardValidation = [
  body("title")
    .optional()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage("Board title must be between 3 and 100 characters"),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Description cannot exceed 500 characters"),

  body("color")
    .optional()
    .isHexColor()
    .withMessage("Invalid board color"),

  body("isArchived")
    .optional()
    .isBoolean()
    .withMessage("isArchived must be true or false"),
];