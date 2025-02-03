const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.post("/login", authController.login);
router.post("/authorize", authController.authorize);
router.post("/authorizeUserToAccessGroup", authController.authorizeUserToAccessGroup);

module.exports = router;
