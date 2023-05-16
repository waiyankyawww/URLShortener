import express from "express";

import hashMap from "./urls.js";

export const router = express.Router();

router.get("/:urlId", async (req, res) => {
  const urlId = req.params.urlId;

  const key = getKeyByValue(hashMap, urlId);

  return res.redirect(key);
});

// define a function to get keys by value
export const getKeyByValue = (map, searchValue) => {
  const keys = [];
  const base = process.env.BASE;
  const shortUrl = `${base}/${searchValue}`;
  for (const [key, value] of map.entries()) {
    if (value === shortUrl) {
      keys.push(key);
    }
  }
  return keys;
};

export default router;
