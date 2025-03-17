const express = require("express");
const notificationController = require("../controllers/notification.controller");

const router = express.Router();

/**
 * @swagger
 * /notification/register:
 *   post:
 *     summary: Registers a device token in order to receive notifications
 *     tags: [Notification]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *               token:
 *                 type: string
 *                 example: "fcm_token_example_1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
 *     responses:
 *       200:
 *         description: Successfully registered token
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
 *                       example: "Token successfully registered"
 *                 code:
 *                   type: integer
 *                   example: 200
 *       400:
 *         description: Malformed request body
 *       409:
 *         description: Token already registered
 *       500:
 *         description: Internal server error
 */
router.post("/register", notificationController.registerToken);

/**
 * @swagger
 * /notification/invalidate:
 *   post:
 *     summary: Invalidates a notification token
 *     tags: [Notification]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *               token:
 *                 type: string
 *                 example: "some_device_token"
 *     responses:
 *       200:
 *         description: Successfully invalidated token
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
 *                       example: "Token successfully invalidated"
 *       400:
 *         description: Malformed request body
 *       404:
 *         description: Token not found
 *       500:
 *         description: Internal server error
 */
router.post("/invalidate", notificationController.invalidateToken);

module.exports = router;
