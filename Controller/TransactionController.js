import transactionModel from "../Models/Transaction.js";

export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await transactionModel
      .find({ user: req.user.id })
      .populate("user");

    res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
      message: "All transactions fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const getTransactionbyDate = async (req, res) => {
  try {
    const { date } = req.params;
    const transactions = await transactionModel
      .find({ user: req.user.id, date: new Date(date) })
      .populate("user");

    res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
      message: "All transactions fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const addTransaction = async (req, res) => {
  try {
    const { title, date, type, category, amount } = req.body;
    const userId = req.user.id;

    if (amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Amount must be a positive number",
      });
    }

    if (type === "expense") {
      const transactions = await transactionModel.find({ user: userId });
      let currentBalance = 0;

      for (const curr of transactions) {
        if (curr.type === "income") {
          currentBalance += curr.amount;
        } else if (curr.type === "expense") {
          currentBalance -= curr.amount;
        }
      }

      if (currentBalance - amount < 0) {
        return res.status(400).json({
          success: false,
          message: `Insufficient balance. Current balance: ${currentBalance}`,
        });
      }
    }

    const newTransaction = await transactionModel.create({
      title,
      date,
      type,
      category,
      amount,
      user: userId,
    });

    res.status(201).json({
      success: true,
      data: newTransaction,
      message: "Transaction added successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const transactionId = req.params.id;
    const transaction = await transactionModel.findOneAndDelete({
      _id: transactionId,
      user: req.user.id,
    });

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found",
      });
    }

    res.status(200).json({
      success: true,
      data: {},
      message: "Transaction deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const UpdateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const transaction = await transactionModel.findOne({
      _id: id,
      user: userId,
    });

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found",
      });
    }

    const updatedTransaction = await transactionModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true },
    );

    res.status(200).json({
      success: true,
      data: updatedTransaction,
      message: "Transaction updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
