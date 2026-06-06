// backend/src/services/projectService.ts
/**
 * Project Service – hands-on project logic.
 */
import { projectRepository } from '../repositories/projectRepository';
import { progressRepository } from '../repositories/progressRepository';
import { AppError } from '../utils/errors';

export const projectService = {
  getAll: async (filters: any) => {
    return projectRepository.findAll(filters);
  },

  getBySlug: async (slug: string) => {
    const project = await projectRepository.findBySlug(slug);
    if (!project) throw new AppError('Project not found', 404);
    return project;
  },

  markComplete: async (userId: string, projectId: string) => {
    const project = await projectRepository.findById(projectId);
    if (!project) throw new AppError('Project not found', 404);
    return progressRepository.upsert({
      user: { id: userId } as any,
      resource_type: 'project',
      resource_id: parseInt(projectId, 10),
      status: 'completed',
      percent_complete: 100,
    });
  },
};