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