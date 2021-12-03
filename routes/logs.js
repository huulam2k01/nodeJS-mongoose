const express = require("express");
const router = express.Router();
const LogServices = require("../services/LogServices");

router.get("/time",LogServices.getLogsByTimePeriod);
router.get("/level/:level",LogServices.getLogsByLevel);
router.get("/",LogServices.getAllLogs);
router.put("/:id", LogServices.updateLogLevel);

module.exports = router;