const express = require("express");
const router = express.Router();
const services = require("../services/employeeService");

router.get("/", services.getAllEmployee);
router.get("/:id", services.getEmployeeById);
router.post("/create", services.addEmployee);
router.put("/:id", services.updateEmployee);
router.delete("/:id", services.deleteEmployee);

module.exports = router;
