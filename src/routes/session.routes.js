const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/session.controller");
const { groupAuthMiddleware } = require("../middlewares/groupAuth.middleware");

router.get("/session/:group", groupAuthMiddleware, sessionController.getCurrentSession);
router.get("/location/:group/:user", groupAuthMiddleware, sessionController.getCurrentLocation);
router.get("/state/:group/:user", groupAuthMiddleware, sessionController.getCurrentState);
router.get("/tracking/:group/:user", groupAuthMiddleware, sessionController.getCurrentTracking);

module.exports = router;
