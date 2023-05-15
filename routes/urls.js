import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";

import { validateUrl } from "../utils/utils.js";
dotenv.config({ path: "../config/.env" });

const router = express.Router();
const hashMap = new Map();

router.post("/short", async (req, res) => {
  const origUrl = req.body;
  const base = process.env.BASE;

  // generate short url
  const urlId = nanoid(); // nanoid(8) will generate uniqueId with length of 8

  if (validateUrl(origUrl)) {
    try {
      // const url = Url.findOne({ origUrl });
      const hasUrl = hashMap.has(origUrl);
      if (hasUrl === false) {
        const shortUrl = `${base}/${urlId}`;

        hashMap.set(origUrl, shortUrl);

        // await url.save();
        // res.json(url);
        res.json(hashMap.get(origUrl));
      }

      res.json(hashMap.get(origUrl));
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(400).json("invalid Original Url");
  }
});

module.export = ("urlRouter", { router, hashMap });

// export default module("urlsRouter", router);
