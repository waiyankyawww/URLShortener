import express from "express";

import { hashMap } from "./urls.js";

export const router = express.Router();

router.get("/:urlId", async (req, res) => {
  const urlId = req.params.urlId;

  console.log("urlId for a single url => " + urlId);
  for (const value of hashMap.values()) {
    console.log("values of hashMap from index => " + value);
  }

  const key = getKeyByValue(hashMap, urlId);
  console.log(`this is the key ${key}`);
  return res.redirect(key);
});

// define a function to get keys by value
export const getKeyByValue = (map, searchValue) => {
  console.log("this is the map value => " + map);
  console.log("serachValue => " + searchValue);
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
