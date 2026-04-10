import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  try {
    // Extract completed query parameter
    const { completed } = req.query;
    
    // Convert string 'true'/'false' to boolean or null if not provided
    let completedFilter = null;
    if (completed !== undefined) {
      completedFilter = completed === 'true';
    }
    
    const tasks = await taskService.getAllTasks(completedFilter);
    res.json(tasks);
  } catch (error) {
    next(error);
  }
}

export async function createTask(req, res, next) {
  try {
    const { title, completed } = req.body;
    const task = await taskService.createTask({ title, completed });
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
}