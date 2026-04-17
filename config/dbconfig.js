import mongoose from "mongoose";

export const connectDBs = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URL || "mongodb://localhost:27017/financeApp",
    );

    console.log("Connected to MongoDB successfully!");
  } catch (err) {
    console.log("DB Connection Error: ", err);
  }
};
