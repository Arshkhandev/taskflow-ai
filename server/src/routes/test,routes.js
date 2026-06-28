import express from "express";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protect, (req, res) => {

  res.json({
    success: true,
    message: "Protected Route",
    user: req.user,
  });

});

export default router;