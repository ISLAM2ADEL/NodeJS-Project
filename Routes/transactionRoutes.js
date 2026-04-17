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
/**
 * @swagger
 * tags:
 * name: Transactions
 * description: Personal finance tracking (Income and Expenses)
 */
router.use(auth);
/**
 * @swagger
 * /api/v1/transactions:
 * get:
 * summary: Get all user transactions
 * tags: [Transactions]
 * security:
 * - bearerAuth: []
 * parameters:
 * - in: query
 * name: type
 * schema:
 * type: string
 * enum: [income, expense]
 * description: Filter by transaction type
 * - in: query
 * name: category
 * schema:
 * type: string
 * description: Filter by category (e.g., Food, Salary)
 * - in: query
 * name: search
 * schema:
 * type: string
 * description: Search titles (e.g., "Star" for Starbucks)
 * - in: query
 * name: sort
 * schema:
 * type: string
 * description: Sort by field (e.g., -amount for highest first)
 * - in: query
 * name: page
 * schema:
 * type: integer
 * description: Page number for pagination
 * - in: query
 * name: limit
 * schema:
 * type: integer
 * description: Number of items per page
 * responses:
 * 200:
 * description: A paginated list of transactions
 * post:
 * summary: Add a new transaction
 * tags: [Transactions]
 * security:
 * - bearerAuth: []
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * required: [title, amount, type, category]
 * properties:
 * title: { type: string, example: "Monthly Rent" }
 * amount: { type: number, example: 1200 }
 * type: { type: string, enum: [income, expense] }
 * category: { type: string, example: "Housing" }
 * date: { type: string, format: date, example: "2026-04-17" }
 * responses:
 * 201:
 * description: Created successfully
 */
router.route("/").get(getAllTransactions).post(addTransaction);

/**
 * @swagger
 * /api/v1/transactions/date/{date}:
 * get:
 * summary: Find transactions by a specific date
 * tags: [Transactions]
 * security:
 * - bearerAuth: []
 * parameters:
 * - in: path
 * name: date
 * required: true
 * schema:
 * type: string
 * example: "2026-04-17"
 * responses:
 * 200:
 * description: List of transactions for that day
 */
router.route("/date/:date").get(getTransactionbyDate);

/**
 * @swagger
 * /api/v1/transactions/{id}:
 * patch:
 * summary: Update an existing transaction
 * tags: [Transactions]
 * security:
 * - bearerAuth: []
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: string
 * requestBody:
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * title: { type: string }
 * amount: { type: number }
 * responses:
 * 200:
 * description: Updated successfully
 * delete:
 * summary: Delete a transaction
 * tags: [Transactions]
 * security:
 * - bearerAuth: []
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: string
 * responses:
 * 200:
 * description: Transaction deleted
 */
router.route("/:id").patch(UpdateTransaction).delete(deleteTransaction);

export default router;
