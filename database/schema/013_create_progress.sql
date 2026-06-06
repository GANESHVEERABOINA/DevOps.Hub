-- User progress tracking (roadmap topics, projects, etc.)
CREATE TABLE IF NOT EXISTS user_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    resource_type VARCHAR(50) NOT NULL CHECK (resource_type IN ('roadmap_topic','project','question_category')),
    resource_id INT NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'not_started' CHECK (status IN ('not_started','in_progress','completed')),
    percent_complete DECIMAL(5,2) DEFAULT 0,
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    UNIQUE(user_id, resource_type, resource_id)
);

CREATE INDEX idx_progress_user ON user_progress(user_id);