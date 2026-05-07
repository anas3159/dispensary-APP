const userModel = require("../models/userModel");
const { validationResult } = require("express-validator");
const getAlluser = async (req, res) => {
  try {
    const users = await userModel.find(); // جلب كل المستخدمين

    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    } else {
      const userinDB = await userModel.findOne({
        email: email,
        password: password,
      });

      if (userinDB)
        res.status(200).json({ status: "success", msg: "login complete" });
      else
        res
          .status(404)
          .json({ status: "error", msg: "no user have this data" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error in try and catch",
      message: error.message,
    });
  }
};

module.exports = { getAlluser, login };
