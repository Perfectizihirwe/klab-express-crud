import express from "express";
import { verifyToken, isAdmin } from "../middleware";

const newsLetterRouter = express.Router();

import { addNew, getAll, getOneLetter } from "../controllers/newsLetter";

newsLetterRouter.use(verifyToken);

newsLetterRouter.get("/getOneLetter/:id", getOneLetter);

newsLetterRouter.get("/", getAll);

newsLetterRouter.post("/", isAdmin, addNew);

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
