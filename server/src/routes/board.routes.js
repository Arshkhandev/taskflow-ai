import express from "express";

import { protect } from "../middleware/auth.middleware.js";
import validateRequest from "../middleware/validateRequest.js";

import {
  createBoardValidation,
} from "../validators/board.validator.js";

import {
  createBoard,
  getBoards,
} from "../controllers/board.controller.js";

const router = express.Router();
router.get(
  "/",
  protect,
  getBoards
);

router.post(
  "/",
  protect,
  createBoardValidation,
  validateRequest,
  createBoard
);

export default router;