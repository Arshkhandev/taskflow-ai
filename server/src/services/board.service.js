import Board from "../models/Board.js";
import ApiError from "../utils/ApiError.js";

export const createBoardService = async (boardData, userId) => {
  const { title, description, color } = boardData;

  const board = await Board.create({
    title,
    description,
    color,
    owner: userId,
  });

  return {
    id: board._id,
    title: board.title,
    description: board.description,
    color: board.color,
    isArchived: board.isArchived,
    createdAt: board.createdAt,
    updatedAt: board.updatedAt,
  };
};

export const getBoardsService = async (userId) => {
  const boards = await Board.find({
    owner: userId,
    isArchived: false,
  }).sort({ createdAt: -1 });

  return boards.map((board) => ({
    id: board._id,
    title: board.title,
    description: board.description,
    color: board.color,
    isArchived: board.isArchived,
    createdAt: board.createdAt,
    updatedAt: board.updatedAt,
  }));
};


export const getBoardByIdService = async (boardId, userId) => {
  const board = await Board.findOne({
    _id: boardId,
    owner: userId,
    isArchived: false,
  });

  if (!board) {
    throw new ApiError(404, "Board not found");
  }

  return {
    id: board._id,
    title: board.title,
    description: board.description,
    color: board.color,
    isArchived: board.isArchived,
    createdAt: board.createdAt,
    updatedAt: board.updatedAt,
  };
};



export const updateBoardService = async (
  boardId,
  userId,
  boardData
) => {
  const board = await Board.findOne({
    _id: boardId,
    owner: userId,
    isArchived: false,
  });

  if (!board) {
    throw new ApiError(404, "Board not found");
  }

  if (boardData.title !== undefined) {
    board.title = boardData.title;
  }

  if (boardData.description !== undefined) {
    board.description = boardData.description;
  }

  if (boardData.color !== undefined) {
    board.color = boardData.color;
  }

  await board.save();

  return {
    id: board._id,
    title: board.title,
    description: board.description,
    color: board.color,
    isArchived: board.isArchived,
    createdAt: board.createdAt,
    updatedAt: board.updatedAt,
  };
};


export const archiveBoardService = async (
  boardId,
  userId
) => {
  const board = await Board.findOne({
    _id: boardId,
    owner: userId,
    isArchived: false,
  });

  if (!board) {
    throw new ApiError(404, "Board not found");
  }

  board.isArchived = true;

  await board.save();

  return {
    id: board._id,
    title: board.title,
    message: "Board archived successfully",
  };
};

export const deleteBoardService = async (
  boardId,
  userId
) => {
  const board = await Board.findOne({
    _id: boardId,
    owner: userId,
  });

  if (!board) {
    throw new ApiError(404, "Board not found");
  }

  await board.deleteOne();

  return {
    message: "Board deleted successfully",
  };
};