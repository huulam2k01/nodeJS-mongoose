const express = require("express");
const router = express.Router();
const employees = require("./employees");
const customers = require("./customers");
const users = require("./user");
const logs = require("./logs");

router.use("/employees", employees);
router.use("/customers", customers);
router.use("/users", users);
router.use("/logs", logs);

module.exports = router;
