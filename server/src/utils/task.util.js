export const buildTaskPayload = (boardId, task) => {
  return {
    board: boardId,
    title: task.title,
    description: "",
    status: "todo",
    priority: task.priority,
    dueDate: null,
  };
};