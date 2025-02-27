const express = require("express");
const groupController = require("../controllers/group.controller");
const { groupAuthMiddleware } = require("../middlewares/groupAuth.middleware");

const router = express.Router();

router.get("/user/:userId", groupController.getGroupsById);
router.post("/", groupAuthMiddleware, groupController.createGroup);
router.get("/:group", groupAuthMiddleware, groupController.getGroup);
router.put("/:group", groupAuthMiddleware, groupController.updateGroup);
router.delete("/:group", groupAuthMiddleware, groupController.deleteGroup);
router.post("/:group/addMember", groupAuthMiddleware, groupController.addMember);
router.post("/:group/removeMember", groupAuthMiddleware, groupController.removeMember);

module.exports = router;
