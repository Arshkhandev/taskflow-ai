import express from "express";

import { protect } from "../middleware/auth.middleware.js";
import validateRequest from "../middleware/validateRequest.js";

import {
  createBoardValidation,
  updateBoardValidation,
} from "../validators/board.validator.js";

import {
  createBoard,
  getBoards,
  getBoardById,
  updateBoard,
  archiveBoard,
  deleteBoard,
} from "../controllers/board.controller.js";

const router = express.Router();

router.get(
  "/",
  protect,
  getBoards
);


router.get(
  "/:id",
  protect,
  getBoardById
);

router.post(
  "/",
  protect,
  createBoardValidation,
  validateRequest,
  createBoard
);


router.put(
  "/:id",
  protect,
  updateBoardValidation,
  validateRequest,
  updateBoard
);

router.patch(
  "/:id/archive",
  protect,
  archiveBoard
);


router.delete(
  "/:id",
  protect,
  deleteBoard
);

export default router;