const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
  nationalNumber: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Users", userSchema);
