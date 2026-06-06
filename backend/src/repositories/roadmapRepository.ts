// backend/src/repositories/roadmapRepository.ts
/**
 * Roadmap Repository – data access for roadmaps and topics.
 * Dependencies: AppDataSource, Roadmap, RoadmapTopic entities.
 */
import { AppDataSource } from '../config/database';
import { Roadmap } from '../entities/Roadmap';
import { RoadmapTopic } from '../entities/RoadmapTopic';

export const roadmapRepository = {
  findAll: async () => {
    return AppDataSource.getRepository(Roadmap).find({ order: { created_at: 'ASC' } });
  },

  findBySlug: async (slug: string) => {
    return AppDataSource.getRepository(Roadmap).findOne({ where: { slug } });
  },

  findTopicsByRoadmapId: async (roadmapId: number) => {
    return AppDataSource.getRepository(RoadmapTopic).find({
      where: { roadmap: { id: roadmapId } },
      order: { order_index: 'ASC' },
    });
  },

  findTopicById: async (topicId: number) => {
    return AppDataSource.getRepository(RoadmapTopic).findOne({ where: { id: topicId } });
  },
};