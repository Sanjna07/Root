import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Use the latest stable model name - try gemini-pro or gemini-1.5-flash
export const gemini = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
