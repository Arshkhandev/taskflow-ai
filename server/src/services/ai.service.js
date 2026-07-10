import ApiError from "../utils/ApiError.js";
import { askGemini } from "../utils/ai.util.js";
import { buildTaskPayload } from "../utils/task.util.js";
import { createTaskService } from "./task.service.js";

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
- Estimate hours as positive integers.
- Do not include explanations.
- Do not wrap the JSON in markdown.
`;

    const text = await askGemini(prompt);

    let data;

    try {
      data = JSON.parse(text);
    } catch {
      throw new ApiError(
        500,
        "Gemini returned an invalid JSON response."
      );
    }

    if (!data.tasks || !Array.isArray(data.tasks)) {
      throw new ApiError(
        500,
        "Invalid response received from Gemini AI."
      );
    }

    for (const task of data.tasks) {
      if (
        !task.title ||
        typeof task.title !== "string" ||
        !["low", "medium", "high"].includes(task.priority) ||
        typeof task.estimatedHours !== "number" ||
        task.estimatedHours <= 0
      ) {
        throw new ApiError(
          500,
          "Gemini returned an invalid task format."
        );
      }
    }

    return data.tasks.slice(0, 10);
  } catch (error) {
    console.error(error);

    if (error instanceof ApiError) {
      throw error;
    }

    throw new ApiError(
      500,
      "Failed to generate tasks."
    );
  }
};

export const generateAndCreateTasksService = async (
  userId,
  boardId,
  goal
) => {
  try {
    const tasks = await generateTasksService(goal);

    const createdTasks = await Promise.all(
      tasks.map((task) =>
        createTaskService(
          userId,
          buildTaskPayload(boardId, task)
        )
      )
    );

    return createdTasks;
  } catch (error) {
    console.error(error);

    if (error instanceof ApiError) {
      throw error;
    }

    throw new ApiError(
      500,
      "Failed to generate and create tasks."
    );
  }
};



export const breakDownTaskService = async (task) => {
  try {
    const prompt = `
You are an expert project manager.

Break the following task into smaller actionable subtasks.

Task:
${task}

Return ONLY valid JSON.

Schema:

{
  "subtasks": [
    {
      "title": "string"
    }
  ]
}

Rules:
- Generate between 3 and 8 subtasks.
- Keep each title concise.
- Do not include explanations.
- Do not wrap the JSON in markdown.
`;

    const text = await askGemini(prompt);

    let data;

    try {
      data = JSON.parse(text);
    } catch {
      throw new ApiError(
        500,
        "Gemini returned an invalid JSON response."
      );
    }

    if (
      !data.subtasks ||
      !Array.isArray(data.subtasks)
    ) {
      throw new ApiError(
        500,
        "Invalid response received from Gemini AI."
      );
    }

    for (const subtask of data.subtasks) {
      if (
        !subtask.title ||
        typeof subtask.title !== "string"
      ) {
        throw new ApiError(
          500,
          "Gemini returned an invalid subtask format."
        );
      }
    }

    return data.subtasks.slice(0, 8);
  } catch (error) {
    console.error(error);

    if (error instanceof ApiError) {
      throw error;
    }

    throw new ApiError(
      500,
      "Failed to break down task."
    );
  }
};


export const suggestPriorityService = async (
  title,
  description = ""
) => {
  try {
    const prompt = `
You are an expert project manager.

Analyze the task below and suggest the most appropriate priority.

Task Title:
${title}

Task Description:
${description}

Return ONLY valid JSON.

Schema:

{
  "priority": "low | medium | high",
  "reason": "string"
}

Rules:
- Priority must be only one of: low, medium, high.
- Reason should be one concise sentence.
- Do not include markdown.
`;

    const text = await askGemini(prompt);

    let data;

    try {
      data = JSON.parse(text);
    } catch {
      throw new ApiError(
        500,
        "Gemini returned an invalid JSON response."
      );
    }

    if (
      !["low", "medium", "high"].includes(
        data.priority
      ) ||
      typeof data.reason !== "string"
    ) {
      throw new ApiError(
        500,
        "Invalid priority response from Gemini."
      );
    }

    return data;
  } catch (error) {
    console.error(error);

    if (error instanceof ApiError) {
      throw error;
    }

    throw new ApiError(
      500,
      "Failed to suggest priority."
    );
  }
};

export const suggestDueDateService = async (
  title,
  description = ""
) => {
  try {
    const prompt = `
You are an expert project manager.

Estimate how many days this task should take.

Task Title:
${title}

Task Description:
${description}

Return ONLY valid JSON.

Schema:

{
  "estimatedDays": number,
  "reason": "string"
}

Rules:
- estimatedDays must be a positive integer.
- reason should be one concise sentence.
- Do not include markdown.
`;

    const text = await askGemini(prompt);

    let data;

    try {
      data = JSON.parse(text);
    } catch {
      throw new ApiError(
        500,
        "Gemini returned an invalid JSON response."
      );
    }

    if (
      typeof data.estimatedDays !== "number" ||
      data.estimatedDays <= 0 ||
      typeof data.reason !== "string"
    ) {
      throw new ApiError(
        500,
        "Invalid due date response from Gemini."
      );
    }

    return data;
  } catch (error) {
    console.error(error);

    if (error instanceof ApiError) {
      throw error;
    }

    throw new ApiError(
      500,
      "Failed to suggest due date."
    );
  }
};

export const improveDescriptionService = async (
  title,
  description
) => {
  try {
    const prompt = `
You are an expert software project manager.

Improve the following task description.

Task Title:
${title}

Current Description:
${description}

Return ONLY valid JSON.

Schema:

{
  "improvedDescription": "string"
}

Rules:
- Keep the meaning the same.
- Improve clarity and professionalism.
- Do not add unrelated information.
- Do not use markdown.
`;

    const text = await askGemini(prompt);

    let data;

    try {
      data = JSON.parse(text);
    } catch {
      throw new ApiError(
        500,
        "Gemini returned an invalid JSON response."
      );
    }

    if (
      typeof data.improvedDescription !== "string" ||
      !data.improvedDescription.trim()
    ) {
      throw new ApiError(
        500,
        "Invalid improved description response from Gemini."
      );
    }

    return data;
  } catch (error) {
    console.error(error);

    if (error instanceof ApiError) {
      throw error;
    }

    throw new ApiError(
      500,
      "Failed to improve description."
    );
  }
};