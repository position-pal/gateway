const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/session.controller");
const groupAuthMiddleware = require("../middlewares/groupAuth");

router.use(groupAuthMiddleware);

router.get("/session/:group", sessionController.getCurrentSession);
router.get("/location/:group/:user", sessionController.getCurrentLocation);
router.get("/state/:group/:user", sessionController.getCurrentState);
router.get("/tracking/:group/:user", sessionController.getCurrentTracking);

module.exports = router;
