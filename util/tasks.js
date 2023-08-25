// tasks.js

const tasks = [];

module.exports = {
  getAllTasks: () => tasks,
  addTask: (taskName) => tasks.push({ name: taskName, completed: false }),
  completeTask: (taskIndex) => tasks[taskIndex].completed = true,
  deleteTask: (taskIndex) => tasks.splice(taskIndex, 1),
  updateTask: (taskIndex, updatedTaskName) => tasks[taskIndex].name = updatedTaskName,
};
