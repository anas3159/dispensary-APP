const express = require("express");
const router = express.Router();
const usersController = require("../Controller/usersController");
router.route("/").get(usersController.getAlluser);
module.exports = router;
