const express = require("express");
const newsLetterRouter = express.Router();
const getOneLetter = require("../controllers/newsLetter/getOneLetter.js");
const getAll = require("../controllers/newsLetter/getAll.js");
const addNew = require("../controllers/newsLetter/addNewLetter.js");

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

module.exports = newsLetterRouter;
