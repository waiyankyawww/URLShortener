import express from "express";
import dotenv from "dotenv";

import { hashMap } from "./urls.js";
import { getKeyByValue } from "./index.js";

dotenv.config();

export const router = express.Router();

router.delete("/:urlId", async (req, res) => {
  const urlId = req.params.urlId;
  const key = getKeyByValue(hashMap, urlId);

  console.log("urlId to delete => " + urlId);
  // const responseObject = {
  //   singleValue,
  //   hashMap: Array.from(hashMap.entries()),
  // };
  hashMap.delete(key);
  res.status(200).json({ message: "deleted successfully" });
});

export default router;
