const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Logs in a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: mario.rossi@gmail.com
 *               password:
 *                 type: string
 *                 example: w0nd3rfulApp!@
 *
 *     responses:
 *       200:
 *         description: Successfully logged in
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
 *                     token:
 *                       type: string
 *                       example: "..."
 *                 code:
 *                   type: integer
 *                   example: 200
 *       400:
 *         description: Malformed request body
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */
router.post("/login", authController.login);

/**
 * @swagger
 * /auth/authorize:
 *   post:
 *     summary: Authorizes a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjM0NTY3ODkwLCJpYXQiOjE2MjMwODk4NzIsImV4cCI6MTYyMzA5MzQ3Mn0.PK9Cm1_vD5hH2pDZqR5Jkv25e19CgihUE8-jf3k2c-w
 *     responses:
 *       200:
 *         description: Successfully authorized
 *       400:
 *         description: Malformed request body
 *       401:
 *         description: Invalid token
 *       500:
 *         description: Internal server error
 */
router.post("/authorize", authController.authorize);

/**
 * @swagger
 * /auth/authorizeUserToAccessGroup:
 *   post:
 *     summary: Authorizes a user to access a group
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjM0NTY3ODkwLCJpYXQiOjE2MjMwODk4NzIsImV4cCI6MTYyMzA5MzQ3Mn0.PK9Cm1_vD5hH2pDZqR5Jkv25e19CgihUE8-jf3k2c-w
 *               groupId:
 *                 type: string
 *                 example: 3428020f-2332-4d67-9031-98f636a55ce5
 *     responses:
 *       200:
 *         description: Successfully authorized user
 *       401:
 *         description: Authorization failed
 */
router.post("/authorizeUserToAccessGroup", authController.authorizeUserToAccessGroup);

module.exports = router;
