const express = require("express");
const notificationController = require("../controllers/notification.controller");

const router = express.Router();

router.post("/register", notificationController.registerToken);
router.post("/invalidate", notificationController.invalidateToken);

module.exports = router;
