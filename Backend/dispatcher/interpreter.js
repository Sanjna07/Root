import { gemini } from "../openai/client.js";

export async function interpret(text) {
  const prompt = `
You MUST return ONLY pure JSON. 
No explanation, no markdown, no code block.

User said: "${text}"

Return JSON in exactly this format:
{
  "action": "string",
  "category": "string",
  "data": {}
}
`;

  const result = await gemini.generateContent(prompt);

  // raw model output
  let raw = result.response.text().trim();

  // remove ```json or ``` blocks if present
  raw = raw.replace(/```json/gi, "").replace(/```/g, "").trim();

  // attempt to parse JSON
  try {
    return JSON.parse(raw);
  } catch (err) {
    console.error("❌ Failed to parse JSON. Raw output:", raw);
    return null;
  }
}