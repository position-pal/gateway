const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/:id', userController.getUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;