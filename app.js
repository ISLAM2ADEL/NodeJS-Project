import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// 1. عملنا Import لملف الـ authRoutes الجديد
import authRoutes from "./Routes/authRoutes.js"; 
import adminRoutes from "./Routes/adminRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

// 2. شغلنا الـ Routes بتاعة الـ Auth
app.use("/api/v1/auth", authRoutes); 
app.use("/api/v1/admin", adminRoutes); 

// Database Connection
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/financeApp")
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((err) => console.log("DB Connection Error: ", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});