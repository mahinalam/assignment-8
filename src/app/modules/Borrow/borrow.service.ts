import { BorrowRecord, Member } from "@prisma/client";
import prisma from "../../sharred/prisma";

// create borrow
const createBookBorrowIntoDB = async (
  payload: BorrowRecord
): Promise<BorrowRecord | null> => {
  const result = await prisma.borrowRecord.create({
    data: payload,
  });
  return result;
};

// return book
const returnBookIntoDB = async (borrowId: string) => {
  const day = new Date().getDay();
  console;
  await prisma.borrowRecord.findUniqueOrThrow({
    where: {
      borrowId,
    },
  });

  const result = await prisma.borrowRecord.update({
    where: {
      borrowId,
    },
    data: {
      returnDate: new Date(),
    },
  });
  return result;
};

// Fetches details of a specific member by their memberId.
const getAllOverDueBooks = async (): Promise<BorrowRecord[] | []> => {
  const today = new Date();
  const fourteenDaysAgo = new Date(today);
  fourteenDaysAgo.setDate(today.getDate() - 14);

  const result = await prisma.borrowRecord.findMany({
    where: {
      returnDate: null,
      borrowDate: {
        lt: fourteenDaysAgo,
      },
    },
    include: {
      book: {
        select: {
          title: true,
        },
      },
      member: {
        select: {
          name: true,
        },
      },
    },
  });

  return result;
};

export const BorrowService = {
  createBookBorrowIntoDB,
  returnBookIntoDB,
  getAllOverDueBooks,
};
