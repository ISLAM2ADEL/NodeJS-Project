import mongoose from "mongoose";

const { Schema } = mongoose;

const transactionSchema = Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Transaction name is required"],
      minlength: [3, "name must be 3 at minimum"],
      maxlength: [20, "name must be 20 at maximum"],
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      minlength: [3, "Category Name should be at minimum of 3"],
      maxLength: [30, "Category Name should be at maximum of 30"],
    },
    type: {
      type: String,
      enum: ["income", "expense"],
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  { timestamps: true },
);

const transactionModel = mongoose.model("Transaction", transactionSchema);

export default transactionModel;
