import express from "express";
import { registerUser, loginUser, profile } from "../Controller/userAuth.js"; 
import { auth } from "../Middleware/auth.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 * name: Authentication
 * description: User registration and login operations
 */

/**
 * @swagger
 * /api/v1/auth/register:
 * post:
 * summary: Register a new user
 * tags: [Authentication]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * required: [name, email, password]
 * properties:
 * name: { type: string, example: Filo }
 * email: { type: string, example: filo@example.com }
 * password: { type: string, example: Password123 }
 * responses:
 * 201:
 * description: User created successfully
 * 400:
 * description: User already exists or validation error
 */
router.post("/register", registerUser);

/**
 * @swagger
 * /api/v1/auth/login:
 * post:
 * summary: Login and get JWT token
 * tags: [Authentication]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * required: [email, password]
 * properties:
 * email: { type: string, example: filo@example.com }
 * password: { type: string, example: Password123 }
 * responses:
 * 200:
 * description: Login successful, returns token
 * 401:
 * description: Invalid email or password
 */
router.post("/login", loginUser);

/**
 * @swagger
 * /api/v1/auth/profile:
 * get:
 * summary: Get current user profile
 * tags: [Authentication]
 * security:
 * - bearerAuth: []
 * responses:
 * 200:
 * description: User profile data returned
 * 401:
 * description: Unauthorized - Missing or invalid token
 */
router.get("/profile", auth, profile);

export default router;