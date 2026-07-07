import { getGeminiClient } from "../config/gemini.js";
import ApiError from "../utils/ApiError.js";
export const generateTasksService = async (goal) => {
  try {
    const prompt = `
You are an expert project manager.

Break the following goal into actionable tasks.

Goal:
${goal}

Return ONLY valid JSON.

The response MUST follow this schema exactly:

{
  "tasks": [
    {
      "title": "string",
      "priority": "low | medium | high",
      "estimatedHours": number
    }
  ]
}

Rules:
- Generate between 5 and 10 tasks.
- Keep task titles concise.
- Assign a realistic priority.
- Estimate hours as integers.
- Do not include explanations.
- Do not wrap the JSON in markdown.
`;

    const ai = getGeminiClient();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = response.text.trim();

    const data = JSON.parse(text);

    return data.tasks;
  } catch (error) {
    console.error(error);

    throw new ApiError(
      500,
      "Failed to generate tasks."
    );
  }
};