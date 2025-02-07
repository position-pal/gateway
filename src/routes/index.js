const express = require("express");
const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");
const groupRoutes = require("./group.routes");
const chatRoutes = require("./chat.routes");
const sessionRoutes = require("./session.routes");
const notificationRoutes = require("./notification.routes");

const router = express.Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/groups", groupRoutes);
router.use("/chat", chatRoutes);
router.use("/session", sessionRoutes);
router.use("/notifications", notificationRoutes);

module.exports = router;
