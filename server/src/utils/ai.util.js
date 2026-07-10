import ApiError from "./ApiError.js";
import { getGeminiClient } from "../config/gemini.js";

export const askGemini = async (prompt) => {
  try {
    const ai = getGeminiClient();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error(error);

    if (error.status === 503) {
      throw new ApiError(
        503,
        "Gemini AI is currently busy. Please try again in a few moments."
      );
    }

    throw new ApiError(
      500,
      "Failed to communicate with Gemini AI."
    );
  }
};