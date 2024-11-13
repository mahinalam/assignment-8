import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  res.status(500).json({
    success: false,
    status: err.status || 500,
    message: err.name || "Something went wrong!",
  });
};

export default globalErrorHandler;
