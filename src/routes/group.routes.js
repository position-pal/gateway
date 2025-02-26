const express = require("express");
const groupController = require("../controllers/group.controller");
const { groupAuthMiddleware } = require("../middlewares/groupAuth.middleware");

const router = express.Router();

router.use("/:group", groupAuthMiddleware);

router.post("/", groupController.createGroup);
router.get("/:group", groupController.getGroup);
router.put("/:group", groupController.updateGroup);
router.delete("/:group", groupController.deleteGroup);
router.post("/:group/addMember", groupController.addMember);
router.post("/:group/removeMember", groupController.removeMember);
router.get("/groups/:id", groupController.getGroupsById);

module.exports = router;
