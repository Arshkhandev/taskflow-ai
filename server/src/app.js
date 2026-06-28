import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import testRoutes from "./routes/test.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "TaskFlow API Running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);

export default app;