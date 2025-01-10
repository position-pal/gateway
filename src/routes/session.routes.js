const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/session.controller');

router.get('/session/:group', sessionController.getCurrentSession);
router.get('/location/:user', sessionController.getCurrentLocation);
router.get('/state/:user', sessionController.getCurrentState);
router.get('/tracking/:user', sessionController.getCurrentTracking);

module.exports = router;