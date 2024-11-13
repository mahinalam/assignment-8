import { Request, Response } from "express";
import catchAsync from "../../sharred/catchAsync";
import sendResponse from "../../sharred/sendResponse";
import { BookService } from "./book.service";

// create a book.
const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.createBookIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Book created successfully",
    data: result,
  });
});

// Retrieves a list of all books in the library.
const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBooksFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Books retrieved successfully",
    data: result,
  });
});

// Retrieves a specefic book.
const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await BookService.getSingleBookFromDB(bookId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book retrieved successfully",
    data: result,
  });
});

// update a specefic book.
const updateBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await BookService.updateBookIntoDB(bookId, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book updated successfully",
    data: result,
  });
});

// delete a specefic book.
const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  await BookService.deleteBookFromDB(bookId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book successfully deleted",
  });
});

export const BookController = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
