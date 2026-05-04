const express = require("express");
const router = express.Router();
const usersController = require("../controller/usersController");
router.route("/").get(usersController.getAlluser);
module.exports = router;
