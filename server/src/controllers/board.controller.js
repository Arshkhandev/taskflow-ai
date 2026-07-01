import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
  createBoardService,
  getBoardsService,
} from "../services/board.service.js";

export const createBoard = asyncHandler(async (req, res) => {
  const board = await createBoardService(
    req.body,
    req.user._id
  );

  return res.status(201).json(
    new ApiResponse(
      201,
      "Board created successfully",
      board
    )
  );
});

export const getBoards = asyncHandler(async (req, res) => {
  const boards = await getBoardsService(req.user._id);

  return res.status(200).json(
    new ApiResponse(
      200,
      "Boards fetched successfully",
      boards
    )
  );
});