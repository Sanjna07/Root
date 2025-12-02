import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Use the latest stable model name
export const gemini = genAI.getGenerativeModel({ model: "models/gemini-1.5-pro" });
