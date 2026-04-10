import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(completedFilter = null) {
  return taskRepository.findAll(completedFilter);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}