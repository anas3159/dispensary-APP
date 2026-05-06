const userModel = require("../models/userModel");

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

module.exports = { getAlluser };
