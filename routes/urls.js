import { Router } from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";

import { validateUrl } from "../utils/utils.js";
dotenv.config();

export const router = Router();
export const hashMap = new Map();
const base = process.env.BASE;

router.post("/", async (req, res) => {
  const body = req.body;
  const origUrl = body.origUrl;
  console.log("this is from the body " + JSON.stringify(body));
  console.log("this is origUrl from the body " + origUrl);

  const urlId = nanoid(); // nanoid(8) will generate uniqueId with length of 8
  console.log("this is the urlId" + JSON.stringify(urlId));

  if (validateUrl(origUrl)) {
    try {
      // const url = Url.findOne({ origUrl });
      const hasUrl = hashMap.has(origUrl);
      console.log(`has url in hashmap =>  ${hasUrl}`);
      if (hasUrl === false) {
        const shortUrl = `${base}/${urlId}`;
        console.log(`this is the shortUrl => ${shortUrl}`);

        hashMap.set(origUrl, shortUrl);

        console.log("this is the hashmap stored => " + hashMap.get(origUrl));
        // await url.save();
        // res.json(url);

        const singleValue = hashMap.get(origUrl);

        const responseObject = {
          singleValue,
          hashMap: Array.from(hashMap.entries()),
        };

        res.send(JSON.stringify(responseObject));
        // res.json(hashMap.get(origUrl));
      } else {
        console.log("the url is already stored => " + hashMap.get(origUrl));
        const singleValue = hashMap.get(origUrl);
        const responseObject = {
          singleValue,
          hashMap: Array.from(hashMap.entries()),
        };
        res.send(JSON.stringify(responseObject));

        // res.json(hashMap.get(origUrl));
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(400).json("invalid Original Url");
  }
  //
  for (const value of hashMap.values()) {
    console.log("values of hashMap => " + value);
  }
  return hashMap;
});

// export default { router, hashMap };
export default router;

// export default module("urlsRouter", router);
