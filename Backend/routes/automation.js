import express from "express";
import { interpret } from "../dispatcher/interpreter.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { input } = req.body;
    const json = await interpret(input);
    res.json({ structured: JSON.parse(json) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
