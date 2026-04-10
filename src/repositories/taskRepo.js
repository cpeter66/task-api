import prisma from '../config/db.js';

export async function findAll(completedFilter = null) {
  // Build the where clause based on the filter
  let whereClause = {};
  
  if (completedFilter !== null) {
    whereClause = { completed: completedFilter };
  }
  
  return prisma.task.findMany({
    where: whereClause,
    orderBy: { id: 'asc' } // Optional: keeps consistent ordering
  });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}