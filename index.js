const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("hello bremo");
});

app.listen(3000 || 3000, () => {
  console.log("listeing to port 3000 ");
});
