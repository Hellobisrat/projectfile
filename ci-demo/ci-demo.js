const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from ci-demo Service");
});

app.listen(3004, () => {
  console.log("Ci-demo service running on port 3004");
});