const express = require("express");
const { getLastMessages } = require("../controllers/chat.controller");

const router = express.Router();

/**
 * @swagger
 * /api/chat/last/{group}/{num}:
 *   get:
 *     summary: Get the last messages in a group chat
 *     tags: [Chat]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: group
 *         required: true
 *         schema:
 *           type: string
 *           example: 3428020f-2332-4d67-9031-98f636a55ce5
 *         description: The group ID
 *       - in: path
 *         name: num
 *         required: true
 *         schema:
 *           type: integer
 *           example: 20
 *         description: Number of messages to retrieve
 *     responses:
 *       200:
 *         description: Successfully retrieved messages
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
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                       content:
 *                         type: string
 *                         example: Hello everyone!
 *                       sender:
 *                         type: string
 *                         example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                       timestamp:
 *                         type: string
 *                         format: date-time
 *                       groupId:
 *                         type: string
 *                         example: 3428020f-2332-4d67-9031-98f636a55ce5
 *       400:
 *         description: Bad request - Group ID and number of messages are required
 *       404:
 *         description: Not found - Error retrieving messages
 *       500:
 *         description: Internal server error
 */
router.get("/last/:group/:num", getLastMessages);

module.exports = router;
