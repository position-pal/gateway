const express = require("express");
const groupController = require("../controllers/group.controller");
const { groupAuthMiddleware } = require("../middlewares/groupAuth.middleware");

const router = express.Router();

/**
 * @swagger
 * /api/groups/user/{userId}:
 *   get:
 *     summary: Get groups by user ID
 *     tags: [Group]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *           example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *         required: true
 *         description: The ID of the user
 *     responses:
 *       200:
 *         description: Successfully retrieved groups
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 3428020f-2332-4d67-9031-98f636a55ce5
 *                   name:
 *                     type: string
 *                     example: "Pizza Lovers"
 *                   members:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                         name:
 *                           type: string
 *                           example: "John"
 *                         surname:
 *                           type: string
 *                           example: "Doe"
 *                         email:
 *                           type: string
 *                           example: "john.doe@gmail.com"
 *                   createdBy:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                       name:
 *                         type: string
 *                         example: "John"
 *                       surname:
 *                         type: string
 *                         example: "Doe"
 *                       email:
 *                         type: string
 *                         example: "john.doe@gmail.com"
 *       400:
 *         description: Malformed request body
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.get("/user/:userId", groupController.getGroupsById);

/**
 * @swagger
 * /api/groups/:
 *   post:
 *     summary: Create a new group
 *     tags: [Group]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Pizza Lovers"
 *               members:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                     name:
 *                       type: string
 *                       example: "John"
 *                     surname:
 *                       type: string
 *                       example: "Doe"
 *                     email:
 *                       type: string
 *                       example: "john.doe@gmail.com"
 *               createdBy:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                   name:
 *                     type: string
 *                     example: "John"
 *                   surname:
 *                     type: string
 *                     example: "Doe"
 *                   email:
 *                     type: string
 *                     example: "john.doe@gmail.com"
 *     responses:
 *       201:
 *         description: Group created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 date:
 *                   type: string
 *                   format: date-time
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 3428020f-2332-4d67-9031-98f636a55ce5
 *                     name:
 *                       type: string
 *                       example: "Pizza Lovers"
 *                     members:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                           name:
 *                             type: string
 *                             example: "John"
 *                           surname:
 *                             type: string
 *                             example: "Doe"
 *                           email:
 *                             type: string
 *                             example: "john.doe@gmail.com"
 *                     createdBy:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                         name:
 *                           type: string
 *                           example: "John"
 *                         surname:
 *                           type: string
 *                           example: "Doe"
 *                         email:
 *                           type: string
 *                           example: "john.doe@gmail.com"
 *       400:
 *         description: Malformed request body
 *       409:
 *         description: Group already exists
 *       500:
 *         description: Internal server error
 */
router.post("/", groupController.createGroup);

/**
 * @swagger
 * /api/groups/{group}:
 *   get:
 *     summary: Get a group by ID
 *     tags: [Group]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: group
 *         schema:
 *           type: string
 *           example: 3428020f-2332-4d67-9031-98f636a55ce5
 *         required: true
 *         description: The ID of the group
 *     responses:
 *       200:
 *         description: Successfully retrieved group
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: 3428020f-2332-4d67-9031-98f636a55ce5
 *                 name:
 *                   type: string
 *                   example: "Pizza Lovers"
 *                 members:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                       name:
 *                         type: string
 *                         example: "John"
 *                       surname:
 *                         type: string
 *                         example: "Doe"
 *                       email:
 *                         type: string
 *                         example: "john.doe@gmail.com"
 *                 createdBy:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                     name:
 *                       type: string
 *                       example: "John"
 *                     surname:
 *                       type: string
 *                       example: "Doe"
 *                     email:
 *                       type: string
 *                       example: "john.doe@gmail.com"
 *       400:
 *         description: Malformed request body
 *       401:
 *         description: Unauthorized access to group
 *       404:
 *         description: Group not found
 *       500:
 *         description: Internal server error
 */
router.get("/:group", groupAuthMiddleware, groupController.getGroup);

/**
 * @swagger
 * /api/groups/{group}:
 *   put:
 *     summary: Update a group
 *     tags: [Group]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: group
 *         schema:
 *           type: string
 *           example: 3428020f-2332-4d67-9031-98f636a55ce5
 *         required: true
 *         description: The ID of the group
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Pizza Lovers"
 *     responses:
 *       200:
 *         description: Group updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 3428020f-2332-4d67-9031-98f636a55ce5
 *                     name:
 *                       type: string
 *                       example: "New Pizza Lovers"
 *                     members:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                           name:
 *                             type: string
 *                           surname:
 *                             type: string
 *                           email:
 *                             type: string
 *                     createdBy:
 *                       type: object
 *                       properties:
 *                         id:
 *                          type: string
 *                          example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                         name:
 *                          type: string
 *                          example: "John"
 *                         surname:
 *                           type: string
 *                           example: "Doe"
 *                         email:
 *                           type: string
 *                           example: "john.doe@gmail.com"
 *       400:
 *         description: Malformed request body
 *       401:
 *         description: Unauthorized access to group
 *       404:
 *         description: Group not found
 *       500:
 *         description: Internal server error
 */
router.put("/:group", groupAuthMiddleware, groupController.updateGroup);

/**
 * @swagger
 * /api/groups/{group}:
 *   delete:
 *     summary: Delete a group
 *     tags: [Group]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: group
 *         schema:
 *           type: string
 *           example: 3428020f-2332-4d67-9031-98f636a55ce5
 *         required: true
 *         description: The ID of the group
 *     responses:
 *       200:
 *         description: Group deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Group deleted successfully"
 *       401:
 *         description: Unauthorized access to group
 *       404:
 *         description: Group not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:group", groupAuthMiddleware, groupController.deleteGroup);

/**
 * @swagger
 * /api/groups/{group}/addMember:
 *   post:
 *     summary: Add a member to a group
 *     tags: [Group]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: group
 *         schema:
 *           type: string
 *           example: 3428020f-2332-4d67-9031-98f636a55ce5
 *         required: true
 *         description: The ID of the group
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: 951c6d72-f5ee-4ae2-afa2-6fa914dcb58f
 *               name:
 *                 type: string
 *                 example: "Jane"
 *               surname:
 *                 type: string
 *                 example: "Smith"
 *               email:
 *                 type: string
 *                 example: "jane.smith@gmail.com"
 *     responses:
 *       200:
 *         description: Member added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 3428020f-2332-4d67-9031-98f636a55ce5
 *                     name:
 *                       type: string
 *                       example: "Pizza Lovers"
 *                     members:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                           name:
 *                             type: string
 *                           surname:
 *                             type: string
 *                           email:
 *                             type: string
 *                     createdBy:
 *                       type: object
 *                       properties:
 *                         id:
 *                          type: string
 *                          example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                         name:
 *                          type: string
 *                          example: "John"
 *                         surname:
 *                           type: string
 *                           example: "Doe"
 *                         email:
 *                           type: string
 *                           example: "john.doe@gmail.com"
 *       400:
 *         description: Malformed request body
 *       401:
 *         description: Unauthorized access to group
 *       404:
 *         description: Group not found
 *       409:
 *         description: Member already in group
 *       500:
 *         description: Internal server error
 */
router.post("/:group/addMember", groupAuthMiddleware, groupController.addMember);

/**
 * @swagger
 * /api/groups/{group}/removeMember:
 *   post:
 *     summary: Remove a member from a group
 *     tags: [Group]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: group
 *         schema:
 *           type: string
 *           example: 3428020f-2332-4d67-9031-98f636a55ce5
 *         required: true
 *         description: The ID of the group
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: 951c6d72-f5ee-4ae2-afa2-6fa914dcb58f
 *               name:
 *                 type: string
 *                 example: "Jane"
 *               surname:
 *                 type: string
 *                 example: "Smith"
 *               email:
 *                 type: string
 *                 example: "jane.smith@gmail.com"
 *     responses:
 *       200:
 *         description: Member removed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 3428020f-2332-4d67-9031-98f636a55ce5
 *                     name:
 *                       type: string
 *                       example: "Pizza Lovers"
 *                     members:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                           name:
 *                             type: string
 *                           surname:
 *                             type: string
 *                           email:
 *                             type: string
 *                     createdBy:
 *                       type: object
 *                       properties:
 *                         id:
 *                          type: string
 *                          example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                         name:
 *                          type: string
 *                          example: "John"
 *                         surname:
 *                           type: string
 *                           example: "Doe"
 *                         email:
 *                           type: string
 *                           example: "john.doe@gmail.com"
 *       400:
 *         description: Malformed request body
 *       401:
 *         description: Unauthorized access to group
 *       404:
 *         description: Group or member not found
 *       500:
 *         description: Internal server error
 */
router.post("/:group/removeMember", groupAuthMiddleware, groupController.removeMember);

module.exports = router;
