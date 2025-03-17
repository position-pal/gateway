const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/session.controller");
const { groupAuthMiddleware } = require("../middlewares/groupAuth.middleware");

/**
 * @swagger
 * /session/{group}:
 *   get:
 *     summary: Get the current session for a group
 *     tags: [Session]
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
 *     responses:
 *       200:
 *         description: Successfully retrieved session
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
 *                     session:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           scope:
 *                             type: object
 *                             properties:
 *                               user:
 *                                 type: object
 *                                 properties:
 *                                   value:
 *                                     type: string
 *                                     example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                               group:
 *                                 type: object
 *                                 properties:
 *                                   value:
 *                                     type: string
 *                                     example: 3428020f-2332-4d67-9031-98f636a55ce5
 *                           state:
 *                             type: string
 *                             example: "ACTIVE"
 *                           lastSampledLocation:
 *                             type: object
 *                             properties:
 *                               user:
 *                                 type: object
 *                                 properties:
 *                                   value:
 *                                     type: string
 *                                     example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                               timestamp:
 *                                 type: object
 *                                 properties:
 *                                   seconds:
 *                                     type: number
 *                                     example: 1630000000
 *                                   nanos:
 *                                     type: number
 *                                     example: 0
 *                               location:
 *                                 type: object
 *                                 properties:
 *                                   latitude:
 *                                     type: number
 *                                     example: 37.7749
 *                                   longitude:
 *                                     type: number
 *                                     example: -122.4194
 *                           activeTracking:
 *                             type: object
 *                             properties:
 *                               route:
 *                                 type: object
 *                                 properties:
 *                                   locations:
 *                                     type: array
 *                                     items:
 *                                       type: object
 *                                       properties:
 *                                         user:
 *                                           type: object
 *                                           properties:
 *                                             value:
 *                                               type: string
 *                                               example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                                         location:
 *                                           type: object
 *                                           properties:
 *                                             latitude:
 *                                               type: number
 *                                               example: 37.7749
 *                                             longitude:
 *                                               type: number
 *                                               example: -122.4194
 *                                         timestamp:
 *                                           type: object
 *                                           properties:
 *                                             seconds:
 *                                               type: number
 *                                               example: 1630000000
 *                                             nanos:
 *                                               type: number
 *                                               example: 0
 *                               destination:
 *                                 type: object
 *                                 properties:
 *                                   name:
 *                                     type: string
 *                                     example: "St. Peter's Basilica, Vatican City, Italy"
 *                                   location:
 *                                     type: object
 *                                     properties:
 *                                       latitude:
 *                                         type: number
 *                                         example: 41.9022
 *                                       longitude:
 *                                         type: number
 *                                         example: 12.4533
 *                               eta:
 *                                 type: object
 *                                 properties:
 *                                   seconds:
 *                                     type: number
 *                                     example: 1630000000
 *                                   nanos:
 *                                     type: number
 *                                     example: 0
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Session not found
 *       500:
 *         description: Internal server error
 */
router.get("/session/:group", groupAuthMiddleware, sessionController.getCurrentSession);

/**
 * @swagger
 * /session/location/{group}/{user}:
 *   get:
 *     summary: Get the current location for a user in a group
 *     tags: [Session]
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
 *         name: user
 *         required: true
 *         schema:
 *           type: string
 *           example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *         description: The user ID
 *     responses:
 *       200:
 *         description: Successfully retrieved location
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
 *                     location:
 *                       type: object
 *                       properties:
 *                         latitude:
 *                           type: number
 *                           example: 37.7749
 *                         longitude:
 *                           type: number
 *                           example: -122.4194
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User in specified group not found
 *       500:
 *         description: Internal server error
 */
router.get("/location/:group/:user", groupAuthMiddleware, sessionController.getCurrentLocation);

/**
 * @swagger
 * /session/state/{group}/{user}:
 *   get:
 *     summary: Get the current state for a user in a group
 *     tags: [Session]
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
 *         name: user
 *         required: true
 *         schema:
 *           type: string
 *           example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *         description: The user ID
 *     responses:
 *       200:
 *         description: Successfully retrieved state
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
 *                     status:
 *                       type: string
 *                       example: "ACTIVE"
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User in specified group not found
 *       500:
 *         description: Internal server error
 */
router.get("/state/:group/:user", groupAuthMiddleware, sessionController.getCurrentState);

/**
 * @swagger
 * /session/tracking/{group}/{user}:
 *   get:
 *     summary: Get the current tracking information for a user in a group
 *     tags: [Session]
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
 *         name: user
 *         required: true
 *         schema:
 *           type: string
 *           example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *         description: The user ID
 *     responses:
 *       200:
 *         description: Successfully retrieved tracking information
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
 *                     route:
 *                       type: object
 *                       properties:
 *                         locations:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               user:
 *                                 type: object
 *                                 properties:
 *                                   value:
 *                                     type: string
 *                                     example: 851c6d72-f5ee-4ae2-afa2-6fa914dcb57e
 *                               location:
 *                                 type: object
 *                                 description: The location of the user
 *                                 properties:
 *                                   latitude:
 *                                     type: number
 *                                     example: 37.7749
 *                                   longitude:
 *                                     type: number
 *                                     example: -122.4194
 *                               timestamp:
 *                                 type: object
 *                                 properties:
 *                                   seconds:
 *                                     type: number
 *                                     example: 1630000000
 *                                   nanos:
 *                                     type: number
 *                                     example: 0
 *                         destination:
 *                           type: object
 *                           properties:
 *                             name:
 *                               type: string
 *                               example: "St. Peter's Basilica, Vatican City, Italy"
 *                             location:
 *                               type: object
 *                               properties:
 *                                 latitude:
 *                                   type: number
 *                                   example: 41.9022
 *                                 longitude:
 *                                   type: number
 *                                   example: 12.4533
 *                         eta:
 *                           type: object
 *                           properties:
 *                             seconds:
 *                               type: number
 *                               example: 1630000000
 *                             nanos:
 *                               type: number
 *                               example: 0
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User in specified group not found
 *       500:
 *         description: Internal server error
 */
router.get("/tracking/:group/:user", groupAuthMiddleware, sessionController.getCurrentTracking);

module.exports = router;
