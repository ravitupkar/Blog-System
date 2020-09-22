const express = require("express");

const app = express();

const PORT = 3000;

app.use("/", (req, res, next) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server Start on ${PORT}`);
});
