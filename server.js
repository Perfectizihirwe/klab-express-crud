const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./src/middleware/logger.js");
const newsLetterRouter = require("./src/routes/newsLetter.js");

const app = express();

app.use(bodyParser.json());
app.use(logger);

app.use("/newsLetter", newsLetterRouter);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
