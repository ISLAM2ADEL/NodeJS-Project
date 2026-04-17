import express from "express";
import { auth } from "../Middleware/auth.js";
import { authorization } from "../Middleware/authorization.js";
import {
  deleteUser,
  getAllusers,
  getAdminStats,
} from "../Controller/adminController.js";

const router = express.Router();

router.use(auth, authorization("admin")); //hna b2olo en el routes de admin lazm el user ykon admin 3shan y2dar y access 3leha
// /api/v1/admin/users
router.route("/users").get(getAllusers);
// /api/v1/admin/stats
router.route("/stats").get(getAdminStats);
// /api/v1/admin/user/:id
router.route("/users/:id").delete(deleteUser);

export default router;
