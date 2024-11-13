import { Book } from "@prisma/client";
import prisma from "../../sharred/prisma";

// create book
const createBookIntoDB = async (payload: Book): Promise<Book | null> => {
  const result = await prisma.book.create({
    data: payload,
  });
  return result;
};

// Retrieves a list of all books in the library.
const getAllBooksFromDB = async (): Promise<Book[] | []> => {
  const result = await prisma.book.findMany();
  return result;
};

// Fetches details of a specific book by its bookId.
const getSingleBookFromDB = async (bookId: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });
  return result;
};

// Updates information of an existing book by its bookId.
const updateBookIntoDB = async (
  bookId: string,
  payload: Partial<Book>
): Promise<Book | null> => {
  const result = await prisma.book.update({
    where: {
      bookId,
    },
    data: payload,
  });
  return result;
};

// delete specefic book
const deleteBookFromDB = async (bookId: string) => {
  const result = await prisma.book.delete({
    where: {
      bookId,
    },
  });
  return result;
};

export const BookService = {
  createBookIntoDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
  updateBookIntoDB,
  deleteBookFromDB,
};
