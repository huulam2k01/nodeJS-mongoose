const express = require("express");
const router = express.Router();
const services = require("../services/userService");

router.post("/register", services.register);
router.post("/login", services.login)


module.exports = router;
