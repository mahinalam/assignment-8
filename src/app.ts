import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Application = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req);
  res.status(404).json({
    success: false,
    message: "API NOT FOUND",
    error: {
      path: req.originalUrl,
      error: "Your requested path is not found.",
    },
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Library Management server...",
  });
});

export default app;
