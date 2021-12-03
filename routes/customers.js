const express = require("express");
const router = express.Router();
const services = require("../services/customerService");
const auth = require("../middlewares/auth");



router.get("/", services.getAllCustomer);
router.get("/:id", services.getCustomerById);
router.post("/create", services.addCustomer);
router.put("/:id",services.updateCustomer);
router.delete("/:id", services.deleteCustomer);
module.exports = router;
