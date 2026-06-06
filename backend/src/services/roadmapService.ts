// backend/src/services/roadmapService.ts
/**
 * Roadmap Service – manages roadmaps and user progress.
 */
import { roadmapRepository } from '../repositories/roadmapRepository';
import { progressRepository } from '../repositories/progressRepository';
import { AppError } from '../utils/errors';

export const roadmapService = {
  getAll: async () => {
    return roadmapRepository.findAll();
  },

  getBySlug: async (slug: string) => {
    const roadmap = await roadmapRepository.findBySlug(slug);
    if (!roadmap) throw new AppError('Roadmap not found', 404);
    return roadmap;
  },

  getTopics: async (slug: string) => {
    const roadmap = await roadmapRepository.findBySlug(slug);
    if (!roadmap) throw new AppError('Roadmap not found', 404);
    return roadmapRepository.findTopicsByRoadmapId(roadmap.id);
  },

  getUserProgress: async (userId: string, slug: string) => {
    const roadmap = await roadmapRepository.findBySlug(slug);
    if (!roadmap) throw new AppError('Roadmap not found', 404);
    const topics = await roadmapRepository.findTopicsByRoadmapId(roadmap.id);
    const progress = await progressRepository.findByUser(userId);
    // Merge progress per topic
    return topics.map((topic: any) => {
      const prog = progress.find(
        (p: any) => p.resource_type === 'roadmap_topic' && p.resource_id === topic.id
      );
      return {
        ...topic,
        status: prog?.status || 'not_started',
        percent_complete: prog?.percent_complete || 0,
      };
    });
  },

  updateTopicProgress: async (userId: string, topicId: number, body: any) => {
    const topic = await roadmapRepository.findTopicById(topicId);
    if (!topic) throw new AppError('Topic not found', 404);
    return progressRepository.upsert({
      user: { id: userId } as any,
      resource_type: 'roadmap_topic',
      resource_id: topicId,
      status: body.status,
      percent_complete: body.percent_complete,
    });
  },
};