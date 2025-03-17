const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *         description: The user ID
 *     responses:
 *       200:
 *         description: Successfully retrieved user
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
 *                       example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                     name:
 *                       type: string
 *                       example: John
 *                     surname:
 *                       type: string
 *                       example: Doe
 *                     email:
 *                       type: string
 *                       example: john.doe@example.com
 *       400:
 *         description: Bad request - User ID is required
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", userController.getUser);

/**
 * @swagger
 * /api/users/getuser:
 *   post:
 *     summary: Get a user by email
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: john.doe@example.com
 *     responses:
 *       200:
 *         description: Successfully retrieved user
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
 *                       example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                     name:
 *                       type: string
 *                       example: John
 *                     surname:
 *                       type: string
 *                       example: Doe
 *                     email:
 *                       type: string
 *                       example: john.doe@example.com
 *       400:
 *         description: Bad request - Email is required
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.post("/getuser", userController.getUserByEmail);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userData:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: John
 *                   surname:
 *                     type: string
 *                     example: Doe
 *                   email:
 *                     type: string
 *                     example: john.doe@example.com
 *               password:
 *                 type: string
 *                 example: secureP@ssw0rd
 *     responses:
 *       200:
 *         description: Successfully created user
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
 *                       example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                     name:
 *                       type: string
 *                       example: John
 *                     surname:
 *                       type: string
 *                       example: Doe
 *                     email:
 *                       type: string
 *                       example: john.doe@example.com
 *       400:
 *         description: Bad request - User data is incomplete
 *       409:
 *         description: Conflict - User already exists
 *       500:
 *         description: Internal server error
 */
router.post("/", userController.createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update a user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: object
 *                 properties:
 *                   userData:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         example: John
 *                       surname:
 *                         type: string
 *                         example: Doe
 *                       email:
 *                         type: string
 *                         example: john.doe@example.com
 *                   password:
 *                     type: string
 *                     example: newP@ssw0rd
 *     responses:
 *       200:
 *         description: Successfully updated user
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
 *                       example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                     name:
 *                       type: string
 *                       example: John
 *                     surname:
 *                       type: string
 *                       example: Doe
 *                     email:
 *                       type: string
 *                       example: john.doe@example.com
 *       400:
 *         description: Bad request - Invalid input
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.put("/:id", userController.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *         description: The user ID
 *     responses:
 *       200:
 *         description: Successfully deleted user
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
 *                     message:
 *                       type: string
 *                       example: User deleted successfully
 *                     userId:
 *                       type: string
 *                       example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *       400:
 *         description: Bad request - User ID is required
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", userController.deleteUser);

module.exports = router;
