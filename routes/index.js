import express from "express";

import hashMap from "./urls.js";

const router = express.Router();

router.get("/:urlId", async (req, res) => {
  try {
    const urlId = req.params.urlId;
    hashMap.get(urlId);

    if (url) {
      await Url.updateOne(
        {
          urlId: urlId,
        },
        {
          $inc: { clicks: 1 },
        }
      );
      return res.redirect(url.origUrl);
    } else res.status(400).json("not found");
  } catch (error) {
    console.log(error);
    res.status(500).json("server error");
  }
});

export default router;
