import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import { generateTasksService } from "../services/ai.service.js";

export const generateTasks = asyncHandler(async (req, res) => {
  const { goal } = req.body;

  const tasks = await generateTasksService(goal);

  return res.status(200).json(
    new ApiResponse(
      200,
      "Tasks generated successfully",
      tasks
    )
  );
});