import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "dotenv/config";

import appRouter from "./src/routes";

const app = express();

app.use(bodyParser.json());

app.use("/api/v1", appRouter);

const PORT = 8080;

mongoose.connect(process.env.DB_CONNECTION_DEV).then((res) => {
  console.log("Database connected");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
