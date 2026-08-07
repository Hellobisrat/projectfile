const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Users Service");
});

app.listen(3003, () => {
  console.log("Users service running on port 3003");
});