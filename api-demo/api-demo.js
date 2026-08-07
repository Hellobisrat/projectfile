const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.send("Hello from API service");
});

app.listen(3001, () => {
  console.log("API running on port 3001");
});