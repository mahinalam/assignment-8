import { Request, Response } from "express";
import catchAsync from "../../sharred/catchAsync";
import sendResponse from "../../sharred/sendResponse";
import { BorrowService } from "./borrow.service";

// borrow a book.
const createBookBorrow = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowService.createBookBorrowIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
});

// return  book.
const returnBook = catchAsync(async (req: Request, res: Response) => {
  const { borrowId } = req.body;
  console.log("borrowId", borrowId);
  const result = await BorrowService.returnBookIntoDB(borrowId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book returned successfully",
  });
});

// Retrieves all overdue books.
const getAllOverdueBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowService.getAllOverDueBooks();
  if (result.length === 0) {
    return sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "No overdue books",
      data: result,
    });
  }
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Overdue borrow list fetched",
    data: result,
  });
});

export const BorrowController = {
  createBookBorrow,
  returnBook,
  getAllOverdueBooks,
};
