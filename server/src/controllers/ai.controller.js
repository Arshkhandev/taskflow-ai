import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
  generateTasksService,
  generateAndCreateTasksService,
  breakDownTaskService,
  suggestPriorityService,
  suggestDueDateService,
  improveDescriptionService
} from "../services/ai.service.js";

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

export const generateAndCreateTasks = asyncHandler(
  async (req, res) => {
    const { boardId, goal } = req.body;

    const result =
      await generateAndCreateTasksService(
        req.user._id,
        boardId,
        goal
      );

    return res.status(201).json(
      new ApiResponse(
        201,
        `${result.length} tasks created successfully`,
        result
      )
    );
  }
);


export const breakDownTask = asyncHandler(
  async (req, res) => {
    const { task } = req.body;

    const result = await breakDownTaskService(task);

    return res.status(200).json(
      new ApiResponse(
        200,
        "Task broken down successfully",
        result
      )
    );
  }
);


export const suggestPriority = asyncHandler(
  async (req, res) => {
    const { title, description } = req.body;

    const result =
      await suggestPriorityService(
        title,
        description
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Priority suggested successfully",
        result
      )
    );
  }
);

export const suggestDueDate = asyncHandler(
  async (req, res) => {
    const { title, description } = req.body;

    const result =
      await suggestDueDateService(
        title,
        description
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Due date suggested successfully",
        result
      )
    );
  }
);

export const improveDescription = asyncHandler(
  async (req, res) => {
    const { title, description } = req.body;

    const result =
      await improveDescriptionService(
        title,
        description
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Description improved successfully",
        result
      )
    );
  }
);