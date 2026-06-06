// backend/src/dto/roadmap.dto.ts
/**
 * DTOs for roadmaps and topics.
 */

export interface CreateRoadmapDto {
  title: string;
  slug: string;
  description?: string;
  estimated_hours?: number;
  icon_url?: string;
}

export interface UpdateRoadmapDto extends Partial<CreateRoadmapDto> {
  is_published?: boolean;
}

export interface CreateTopicDto {
  roadmap_id: number;
  title: string;
  description?: string;
  content?: string;
  order_index: number;
  estimated_minutes?: number;
  parent_topic_id?: number;
  prerequisite_topic_ids?: number[];
}

export interface UpdateTopicProgressDto {
  status: 'not_started' | 'in_progress' | 'completed';
  percent_complete?: number;
}

export interface RoadmapResponse {
  id: number;
  title: string;
  slug: string;
  description?: string;
  estimated_hours?: number;
  icon_url?: string;
  is_published: boolean;
  topics?: TopicResponse[];
}

export interface TopicResponse {
  id: number;
  title: string;
  description?: string;
  order_index: number;
  estimated_minutes?: number;
  prerequisite_topic_ids?: number[];
}