import express from "express";
import { auth } from "../Middleware/auth.js";
import { authorization } from "../Middleware/authorization.js";
import {
  deleteUser,
  getAllusers,
  getAdminStats,
} from "../Controller/adminController.js";

const router = express.Router();
/**
 * @swagger
 * tags:
 *   - name: Admin
 *     description: Administrative management operations (Requires Admin Role)
 */
router.use(auth, authorization("admin"));
/**
 * @swagger
 * /api/v1/admin/users:
 *   get:
 *     summary: Retrieve all users (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search by name or email
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *           enum: [admin, user]
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of all users fetched successfully
 *       403:
 *         description: Forbidden - Requires Admin role
 */
router.route("/users").get(getAllusers);

/**
 * @swagger
 * /api/v1/admin/stats:
 *   get:
 *     summary: Get dashboard statistics
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Statistics including total users and total transactions
 */
router.route("/stats").get(getAdminStats);

/**
 * @swagger
 * /api/v1/admin/users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
router.route("/users/:id").delete(deleteUser);

export default router;
