const express = require('express');
const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');
const groupRoutes = require('./group.routes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/groups', groupRoutes);


module.exports = router;