import { gemini } from "../openai/client.js";

export async function interpret(text) {
  const prompt = `User said: "${text}". Extract structured JSON:

{
  "action": "",
  "category": "",
  "data": {}
}`;

  const result = await gemini.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
