-- User search history
CREATE TABLE IF NOT EXISTS search_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    query TEXT NOT NULL,
    filters JSONB,
    searched_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);