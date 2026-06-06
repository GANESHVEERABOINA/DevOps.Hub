// backend/src/services/resumeService.ts
/**
 * Resume Service – resume builder logic.
 */
import { resumeRepository } from '../repositories/resumeRepository';
import { AppError } from '../utils/errors';

export const resumeService = {
  create: async (userId: string, data: any) => {
    return resumeRepository.create({ user: { id: userId } as any, ...data });
  },

  getById: async (id: string, userId: string) => {
    const resume = await resumeRepository.findById(id);
    if (!resume) throw new AppError('Resume not found', 404);
    if (resume.user.id !== userId) throw new AppError('Forbidden', 403);
    return resume;
  },

  getAll: async (userId: string) => {
    return resumeRepository.findByUser(userId);
  },

  update: async (id: string, userId: string, data: any) => {
    const resume = await resumeRepository.findById(id);
    if (!resume) throw new AppError('Resume not found', 404);
    if (resume.user.id !== userId) throw new AppError('Forbidden', 403);
    return resumeRepository.update(id, data);
  },

  delete: async (id: string, userId: string) => {
    const resume = await resumeRepository.findById(id);
    if (!resume) throw new AppError('Resume not found', 404);
    if (resume.user.id !== userId) throw new AppError('Forbidden', 403);
    await resumeRepository.delete(id);
  },

  analyze: async (id: string, userId: string) => {
    const resume = await resumeRepository.findById(id);
    if (!resume) throw new AppError('Resume not found', 404);
    if (resume.user.id !== userId) throw new AppError('Forbidden', 403);
    // Simple ATS scoring heuristic
    let score = 0;
    const content = JSON.stringify(resume);
    if (content.includes('DevOps')) score += 20;
    if (content.includes('Docker')) score += 15;
    if (content.includes('Kubernetes')) score += 15;
    if (content.includes('AWS') || content.includes('Azure') || content.includes('GCP')) score += 15;
    if (content.includes('CI/CD')) score += 10;
    if (resume.personal_info?.email) score += 10;
    const suggestions: string[] = [];
    if (score < 50) suggestions.push('Add more DevOps keywords.');
    await resumeRepository.update(id, { ats_score: score });
    return { ats_score: score, suggestions };
  },
};