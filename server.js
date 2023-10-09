import express from "express";
import bodyParser from "body-parser";
import { logger } from "./src/middleware";
import mongoose from "mongoose";

import appRouter from "./src/routes";

const app = express();

app.use(bodyParser.json());
app.use(logger);

app.use("/api/v1", appRouter);

const PORT = 8000;

const DB_CONNECTION_PROD =
  "mongodb+srv://perfectizihirwe:3Ps3FsrapXjwxHG3@cluster0.8op02py.mongodb.net/?retryWrites=true&w=majority";

const DB_CONNECTION_DEV = "mongodb://localhost:27017/express-server";

mongoose.connect(DB_CONNECTION_DEV).then((res) => { 
  console.log("Database connected");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
