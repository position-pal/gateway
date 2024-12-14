const express = require('express');
const groupController = require('../controllers/group.controller');

const router = express.Router();

router.post('/', groupController.createGroup);
router.get('/:id', groupController.getGroup);
router.put('/:id', groupController.updateGroup);
router.delete('/:id', groupController.deleteGroup);
router.post('/:id/addMember', groupController.addMember);
router.post('/:id/removeMember', groupController.removeMember);

module.exports = router;