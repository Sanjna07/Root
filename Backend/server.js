import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
import testRoute from "./routes/testRoute.js";
app.use("/api/test", testRoute);

import automationRoute from "./routes/automation.js";
app.use("/api/automation", automationRoute);

import remindersRoute from "./routes/reminders.js";
app.use("/api/reminders", remindersRoute);

import tasksRoute from "./routes/tasks.js";
app.use("/api/tasks", tasksRoute);

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Backend running on port", PORT));
