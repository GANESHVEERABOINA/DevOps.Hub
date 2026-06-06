// backend/src/repositories/searchRepository.ts
/**
 * Search Repository – performs full‑text search across questions, roadmaps, projects.
 */
import { AppDataSource } from '../config/database';
import { Question } from '../entities/Question';
import { Roadmap } from '../entities/Roadmap';
import { Project } from '../entities/Project';

export const searchRepository = {
  globalSearch: async (query: string) => {
    const results: any[] = [];

    // Search questions
    const questionRepo = AppDataSource.getRepository(Question);
    const questions = await questionRepo
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.category', 'cat')
      .where(
        `to_tsvector('english', q.question_text || ' ' || coalesce(q.interview_answer, '')) @@ plainto_tsquery(:query)`,
        { query }
      )
      .limit(20)
      .getMany();

    questions.forEach((q: Question) =>
      results.push({
        id: q.id,
        type: 'question',
        title: q.question_text.substring(0, 80) + (q.question_text.length > 80 ? '…' : ''),
        description: q.simple_explanation || q.interview_answer?.substring(0, 120) || '',
        url: `/questions/${q.id}`,
      })
    );

    // Search roadmaps
    const roadmapRepo = AppDataSource.getRepository(Roadmap);
    const roadmaps = await roadmapRepo
      .createQueryBuilder('r')
      .where(`to_tsvector('english', r.title || ' ' || coalesce(r.description, '')) @@ plainto_tsquery(:query)`, { query })
      .limit(10)
      .getMany();

    roadmaps.forEach((r: Roadmap) =>
      results.push({
        id: r.id.toString(),
        type: 'roadmap',
        title: r.title,
        description: r.description?.substring(0, 120) || '',
        url: `/roadmaps/${r.slug}`,
      })
    );

    // Search projects
    const projectRepo = AppDataSource.getRepository(Project);
    const projects = await projectRepo
      .createQueryBuilder('p')
      .where(`to_tsvector('english', p.title || ' ' || coalesce(p.description, '')) @@ plainto_tsquery(:query)`, { query })
      .limit(10)
      .getMany();

    projects.forEach((p: Project) =>
      results.push({
        id: p.id,
        type: 'project',
        title: p.title,
        description: p.description?.substring(0, 120) || '',
        url: `/projects/${p.slug}`,
      })
    );

    return results;
  },
};