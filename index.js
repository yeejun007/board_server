const express = require("express");
const app = express();
const config = require("./config.json");
const port = config.PORT;

const server = app.listen(port, () => {
  console.log(`Express server has started on port : ${config.PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello?");
});
