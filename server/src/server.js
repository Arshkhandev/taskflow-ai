import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
import "dotenv/config";
console.log("SERVER:", process.env.GEMINI_API_KEY ? "FOUND" : "NOT FOUND");
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log("=================================");
      console.log("🚀 TaskFlow AI Backend Started");
      console.log(`🌐 http://localhost:${PORT}`);
      console.log("=================================");
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();