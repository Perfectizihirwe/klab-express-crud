const database = require("../../utils/mockDatabase.js");

function getOneLetter(req, res) {
  let requestId = req.params.id;
  let data = database.find((item) => {
    return item.id == requestId;
  });

  console.log(data);

  res.json(data);
}

module.exports = getOneLetter;
