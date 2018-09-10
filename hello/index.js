const createHandler = require("azure-function-express").createHandler;
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json()); // if you commented out this line, then this program would be fine.
app.post("/api/hello", (req, res) => {
  res.json({
      message: req.body.message
  });
});

module.exports = createHandler(app);