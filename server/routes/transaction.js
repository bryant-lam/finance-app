import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .limit(50)                        // limit to 50 rows of data
      .sort({ createdOn: -1 });         // filter by latest transaction
    res.status(200).json(transactions); // sends the KPI object to the frontend
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
