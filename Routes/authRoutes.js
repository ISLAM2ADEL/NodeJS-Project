import express from "express";
import { registerUser, loginUser, profile } from "../Controller/userAuth.js"; 
import { auth } from "../Middleware/auth.js";

const router = express.Router();

// POST /api/v1/auth/register
router.post("/register", registerUser);

// POST /api/v1/auth/login
router.post("/login", loginUser);

// GET /api/v1/auth/profile
router.get("/profile", auth, profile);

export default router;