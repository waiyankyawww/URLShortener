import express from "express";
import { nanoid } from "nanoid";
import Url from "../models/Url.js";
import { validateUrl } from "../utils/utils.js";
import dotenv from "dotenv";
dotenv.config({ path: "../config/.env" });

const router = express.Router();

router.post("/short", async (req, res) => {
  const { origUrl } = req.body;
  const base = process.env.BASE;

  // generate short url
  const urlId = nanoid(); // nanoid(8) will generate uniqueId with length of 8

  if (validateUrl(origUrl)) {
    try {
      const url = Url.findOne({ origUrl });
      if (!url) {
        const shortUrl = `${base}/${urlId}`;

        url = new Url({
          origUrl,
          shortUrl,
          urlId,
          date: new Date(),
        });

        await url.save();
        res.json(url);
      }
      res.json(url);
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(400).json("invalid Original Url");
  }
});

// module.export = router;
export default router;
