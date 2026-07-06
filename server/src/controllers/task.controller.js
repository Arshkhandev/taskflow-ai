import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
  createTaskService,
  getBoardTasksService,
  getTaskByIdService,
  updateTaskService,
  archiveTaskService,
  deleteTaskService,
} from "../services/task.service.js";

export const createTask = asyncHandler(async (req, res) => {
  const result = await createTaskService(
    req.user._id,
    req.body
  );

  return res.status(201).json(
    new ApiResponse(
      201,
      "Task created successfully",
      result
    )
  );
});

export const getBoardTasks = asyncHandler(async (req, res) => {
  const result = await getBoardTasksService(
    req.params.boardId,
    req.user._id
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      "Tasks fetched successfully",
      result
    )
  );
});

export const getTaskById = asyncHandler(async (req, res) => {
  const result = await getTaskByIdService(
    req.params.id,
    req.user._id
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      "Task fetched successfully",
      result
    )
  );
});


export const updateTask = asyncHandler(async (req, res) => {
  const result = await updateTaskService(
    req.params.id,
    req.user._id,
    req.body
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      "Task updated successfully",
      result
    )
  );
});

export const archiveTask = asyncHandler(async (req, res) => {
  const result = await archiveTaskService(
    req.params.id,
    req.user._id
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      "Task archived successfully",
      result
    )
  );
});


export const deleteTask = asyncHandler(async (req, res) => {
  const result = await deleteTaskService(
    req.params.id,
    req.user._id
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      "Task deleted successfully",
      result
    )
  );
});