import express from "express";

import { createTask,getBoardTasks, getTaskById,updateTask,archiveTask,deleteTask} from "../controllers/task.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import validateRequest from "../middleware/validateRequest.js";

import { createTaskValidation,updateTaskValidation } from "../validators/task.validator.js";

const router = express.Router();

router.post(
  "/",
  protect,
  createTaskValidation,
  validateRequest,
  createTask
);

router.get(
  "/board/:boardId",
  protect,
  getBoardTasks
);

router.get(
  "/:id",
  protect,
  getTaskById
);


router.put(
  "/:id",
  protect,
  updateTaskValidation,
  validateRequest,
  updateTask
);

router.patch(
  "/:id/archive",
  protect,
  archiveTask
);

router.delete(
  "/:id",
  protect,
  deleteTask
);

export default router;