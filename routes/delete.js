import express from "express";
import dotenv from "dotenv";

import hashMap from "./urls.js";

dotenv.config({ path: "../config/.env" });

export const router = express.Router();

router.get("/delete", async (req, res) => {
  const url = req.body;

  hashMap.delete(url);
  res.status(200).json({ message: "deleted successfully" });
});

export default router;
