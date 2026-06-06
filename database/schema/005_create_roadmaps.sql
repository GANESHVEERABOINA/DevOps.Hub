-- Roadmaps (e.g., DevOps Beginner, AWS)
CREATE TABLE IF NOT EXISTS roadmaps (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    slug VARCHAR(200) UNIQUE NOT NULL,
    description TEXT,
    estimated_hours INT,
    icon_url TEXT,
    is_published BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Roadmap topics (nodes) with dependencies
CREATE TABLE IF NOT EXISTS roadmap_topics (
    id SERIAL PRIMARY KEY,
    roadmap_id INT NOT NULL REFERENCES roadmaps(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    content TEXT,
    order_index INT NOT NULL,             -- order within roadmap
    estimated_minutes INT,
    parent_topic_id INT REFERENCES roadmap_topics(id),
    prerequisite_topic_ids INT[] DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_roadmap_topics_roadmap ON roadmap_topics(roadmap_id);