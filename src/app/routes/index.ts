import express from "express";
import { BookRoute } from "../modules/Book/book.route";
import { MemberRoute } from "../modules/Member/member.route";
import { BorrowRoute } from "../modules/Borrow/borrow.route";
import { ReturnRoute } from "../modules/Borrow/return.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    router: BookRoute,
  },
  {
    path: "/members",
    router: MemberRoute,
  },
  {
    path: "/borrow",
    router: BorrowRoute,
  },
  {
    path: "/return",
    router: ReturnRoute,
  },
];

moduleRoutes.forEach((route: any) => router.use(route.path, route.router));

export default router;
