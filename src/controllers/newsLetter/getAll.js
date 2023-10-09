const database = require("../../utils/mockDatabase");

function getAll(req, res) {
  res.status(200).json(database);
}

module.exports = getAll;
