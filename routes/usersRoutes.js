const express = require("express");
const { loginValidator } = require("../validators/loginValidator");
const router = express.Router();
const usersController = require("../Controller/usersController");
router.route("/").get(usersController.getAlluser);
router.route("/login").post(loginValidator, usersController.login);
module.exports = router;
