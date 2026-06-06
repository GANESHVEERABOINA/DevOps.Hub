// backend/src/services/progressService.ts
/**
 * User Progress Service – overall progress summary.
 */
import { progressRepository } from '../repositories/progressRepository';

export const progressService = {
  getSummary: async (userId: string) => {
    const raw = await progressRepository.getSummary(userId);
    // Transform for dashboard
    return {
      questionsAnswered: raw.find((r: any) => r.type === 'question_category')?.completed || 0,
      roadmapCompletion: raw.find((r: any) => r.type === 'roadmap_topic')?.completed || 0,
      projectsDone: raw.find((r: any) => r.type === 'project')?.completed || 0,
      totalRoadmaps: raw.find((r: any) => r.type === 'roadmap_topic')?.total || 0,
    };
  },

  update: async (userId: string, body: any) => {
    return progressRepository.upsert({
      user: { id: userId } as any,
      resource_type: body.resource_type,
      resource_id: body.resource_id,
      status: body.status,
      percent_complete: body.percent_complete,
    });
  },
};