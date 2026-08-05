const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from API service");
});

app.get("/info", (req, res) => {
  res.send(`
    App Name: ${process.env.APP_NAME}
    Environment: ${process.env.APP_ENV}
    Message: ${process.env.WELCOME_MESSAGE}
    DB Password: ${process.env.DB_PASSWORD}
  `);
});


// const PORT = process.env.PORT || 3000;

// app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));

app.listen(3001, () => {
  console.log("API running on port 3001");
});
