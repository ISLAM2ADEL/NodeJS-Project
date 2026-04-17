import express from "express";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import authRoutes from "./Routes/authRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js";
import transactionRoutes from "./Routes/transactionRoutes.js";
import { connectDBs } from "./config/dbconfig.js";
import { handleError } from "./Middleware/ErrorHandling.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

connectDBs();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/transactions", transactionRoutes);

app.use(handleError);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

app.use("/api", limiter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
