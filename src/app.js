import express from "express";
import dotenv from "dotenv";

import urlsRouter from "../routes/urls.js";
import indexRouter from "../routes/index.js";
import deleteRouter from "../routes/delete.js";

const app = express();
dotenv.config({ path: "./.env" });

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(app.router);
// routes.initialize(app);

app.use("/", indexRouter);
app.use("/api", urlsRouter);
app.use("/api", deleteRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
