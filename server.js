const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const PORT = 8000;

let database = [
  {
    id: 1,
    title: "Fuel Prices have increased",
    body: "RURA has announced that effective of 4th October prices will increases",
  },
];

app.get("/", (req, res) => {
  res.json(database);
});

app.post("/", (req, res) => {
  console.log(req.body);
  database.push(req.body);
  res.sendStatus(201).json({
    message: "Newsletter created",
  });
});

app.get("/getOneLetter/:id", (req, res) => {
  let requestId = req.params.id;
  let data = database.find((item) => {
    return item.id == requestId;
  });

  console.log(data);

  res.json(data);
});

app.put("/", (req, res) => {
  res.send("Put request");
});

app.patch("/", (req, res) => {
  console.log(req.body);
  res.send("Patch request");
});

app.delete("/", (req, res) => {
  res.send("Delete method");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
