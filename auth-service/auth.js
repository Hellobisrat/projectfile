const express = require("express");
const app = express();

app.get("/auth", (req, res) => {
  res.send("Hello from Auth Service");
});

app.listen(3005, () => {
  console.log("Users service running on port 3005");
});