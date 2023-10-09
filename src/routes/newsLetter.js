import express from "express";

const newsLetterRouter = express.Router();

import { addNew, getAll, getOneLetter } from "../controllers/newsLetter";

newsLetterRouter.get("/", getAll);

newsLetterRouter.post("/", addNew);

newsLetterRouter.get("/getOneLetter/:id", getOneLetter);

newsLetterRouter.put("/", (req, res) => {
  res.send("Put request");
});

newsLetterRouter.patch("/", (req, res) => {
  res.send("Patch request");
});

newsLetterRouter.delete("/", (req, res) => {
  res.send("Delete method");
});

export default newsLetterRouter;
