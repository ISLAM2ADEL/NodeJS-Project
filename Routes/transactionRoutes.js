import express from "express";
import {
  getAllTransactions,
  getTransactionbyDate,
  UpdateTransaction,
  addTransaction,
  deleteTransaction,
} from "../Controller/TransactionController.js";
import { auth } from "../Middleware/auth.js";
const router = express.Router();
router.use(auth);
// Path: /api/v1/transactions
router.route("/").get(getAllTransactions).post(addTransaction);

// Path: /api/v1/transactions/date/:date
router.route("/date/:date").get(getTransactionbyDate);

// Path: /api/v1/transactions/:id
router
  .route("/:id")
  .patch(UpdateTransaction) // Handles PATCH /:id
  .delete(deleteTransaction); // Handles DELETE /:id

export default router;
