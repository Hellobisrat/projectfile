const express = require("express");
const app = express();

app.get("/admin", (req, res) => {
  res.send("Hello from Admin Service");
});

app.listen(3002, () => {
  console.log("Admin service running on port 3002");
});