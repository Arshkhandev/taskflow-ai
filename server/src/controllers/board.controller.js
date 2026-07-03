import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
  createBoardService,
  getBoardsService,
  getBoardByIdService,
  updateBoardService,
  archiveBoardService,
  deleteBoardService,
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

export const getBoardById = asyncHandler(async (req, res) => {
  const board = await getBoardByIdService(
    req.params.id,
    req.user._id
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      "Board fetched successfully",
      board
    )
  );
});


export const updateBoard = asyncHandler(async (req, res) => {
  const board = await updateBoardService(
    req.params.id,
    req.user._id,
    req.body
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      "Board updated successfully",
      board
    )
  );
});


export const archiveBoard = asyncHandler(async (req, res) => {
  const result = await archiveBoardService(
    req.params.id,
    req.user._id
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      "Board archived successfully",
      result
    )
  );
});

export const deleteBoard = asyncHandler(async (req, res) => {
  const result = await deleteBoardService(
    req.params.id,
    req.user._id
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      "Board deleted successfully",
      result
    )
  );
});