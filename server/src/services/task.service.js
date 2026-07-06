import Task from "../models/Task.js";
import Board from "../models/Board.js";
import ApiError from "../utils/ApiError.js";

export const createTaskService = async (
  userId,
  taskData
) => {
  const {
    board,
    title,
    description,
    status,
    priority,
    dueDate,
  } = taskData;

  // Verify board ownership
  const existingBoard = await Board.findOne({
    _id: board,
    owner: userId,
    isArchived: false,
  });

  if (!existingBoard) {
    throw new ApiError(
      404,
      "Board not found"
    );
  }

  // Create task
  const task = await Task.create({
    board,
    title,
    description,
    status,
    priority,
    dueDate,
  });

  return {
    id: task._id,
    board: task.board,
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
    dueDate: task.dueDate,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
  };
};




export const getBoardTasksService = async (
  boardId,
  userId
) => {
  // Verify board ownership
  const board = await Board.findOne({
    _id: boardId,
    owner: userId,
    isArchived: false,
  });

  if (!board) {
    throw new ApiError(404, "Board not found");
  }

  // Get all active tasks
  const tasks = await Task.find({
    board: boardId,
    isArchived: false,
  }).sort({
    createdAt: -1,
  });

  return tasks.map((task) => ({
    id: task._id,
    board: task.board,
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
    dueDate: task.dueDate,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
  }));
};

export const getTaskByIdService = async (
  taskId,
  userId
) => {
  const task = await Task.findById(taskId)
    .populate({
      path: "board",
      select: "owner",
    })
    .lean();

  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  // Verify board ownership
  if (task.board.owner.toString() !== userId.toString()) {
    throw new ApiError(404, "Task not found");
  }

  // Archived task should not be accessible
  if (task.isArchived) {
    throw new ApiError(404, "Task not found");
  }

  return {
    id: task._id,
    board: task.board._id,
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
    dueDate: task.dueDate,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
  };
};



export const updateTaskService = async (
  taskId,
  userId,
  updateData
) => {
  const task = await Task.findById(taskId)
    .populate({
      path: "board",
      select: "owner",
    });

  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  // Verify board ownership
  if (task.board.owner.toString() !== userId.toString()) {
    throw new ApiError(404, "Task not found");
  }

  // Archived task cannot be updated
  if (task.isArchived) {
    throw new ApiError(404, "Task not found");
  }

  const {
    title,
    description,
    status,
    priority,
    dueDate,
  } = updateData;

  if (title !== undefined) task.title = title;
  if (description !== undefined)
    task.description = description;
  if (status !== undefined) task.status = status;
  if (priority !== undefined)
    task.priority = priority;
  if (dueDate !== undefined)
    task.dueDate = dueDate;

  await task.save();

  return {
    id: task._id,
    board: task.board._id,
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
    dueDate: task.dueDate,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
  };
};


export const archiveTaskService = async (
  taskId,
  userId
) => {
  const task = await Task.findById(taskId).populate({
    path: "board",
    select: "owner",
  });

  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  // Verify board ownership
  if (task.board.owner.toString() !== userId.toString()) {
    throw new ApiError(404, "Task not found");
  }

  // Already archived
  if (task.isArchived) {
    throw new ApiError(404, "Task not found");
  }

  task.isArchived = true;

  await task.save();

  return {
    id: task._id,
    message: "Task archived successfully",
  };
};


export const deleteTaskService = async (
  taskId,
  userId
) => {
  const task = await Task.findById(taskId).populate({
    path: "board",
    select: "owner",
  });

  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  // Verify board ownership
  if (task.board.owner.toString() !== userId.toString()) {
    throw new ApiError(404, "Task not found");
  }

  await task.deleteOne();

  return {
    message: "Task deleted successfully",
  };
};