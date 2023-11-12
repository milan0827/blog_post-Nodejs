const express = require("express");
const authController = require("./../controller/authController");
const userController = require("./../controller/userController");

const router = express.Router();

router.post("/signup", authController.signup);

router.route("/").get(userController.getAllUser);
router.route("/:id").get(userController.getUser);

module.exports = router;
