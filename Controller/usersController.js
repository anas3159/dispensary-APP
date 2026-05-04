const user = "../models/userModel.js";
const getAlluser = (req, res) => {
  res.json({ status: "success", data: { user } });
};
