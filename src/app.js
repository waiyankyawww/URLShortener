import express from "express";
// import dotenv from "dotenv";

import urlsRouter from "../routes/urls.js";
import indexRouter from "../routes/index.js";
import deleteRouter from "../routes/delete.js";

const app = express();
// dotenv.config({ path: "../.env" });

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

app.use("/api/index", indexRouter);
app.use("/api/short", urlsRouter);
app.use("/api/delete", deleteRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
