import express from "express";
import { BorrowController } from "./borrow.controller";

const router = express.Router();

router.post("/", BorrowController.createBookBorrow);

router.get("/overdue", BorrowController.getAllOverdueBooks);

export const BorrowRoute = router;
