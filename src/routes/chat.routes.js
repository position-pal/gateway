const express = require("express");
const { getLastMessages } = require("../controllers/chat.controller");

const router = express.Router();

router.get("/last/:group/:user/:num", getLastMessages);

module.exports = router;
