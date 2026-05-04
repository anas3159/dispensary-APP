const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.MONGO_URL;
mongoose.connect(url).then(() => {
  console.log("server started");
});
app.use(cors());
app.use(express.json());
const usersRouter = require("./routes/usersRoutes");
app.use("/api/users", usersRouter);
app.listen(process.env.PORT || 3000, () => {
  console.log("listen to port 3000");
});
