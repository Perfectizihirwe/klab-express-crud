const database = require("../../utils/mockDatabase");

function addNew(req, res) {
  database.push(req.body);
  res.status(201).json({
    message: "Newsletter created",
  });
}

module.exports = addNew;
