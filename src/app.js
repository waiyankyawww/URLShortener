import express from "express";
import dotenv from "dotenv";

import { connectDB } from "../config/db";
import urlsRouter from "../routes/urls";
import indexRouter from "../routes/index";

const app = express();
dotenv.config({ path: "./.env" });

connectDB();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRouter);
app.use("/api", urlsRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
