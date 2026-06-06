-- User bookmarks (questions, projects, etc.)
CREATE TABLE IF NOT EXISTS bookmarks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    item_type VARCHAR(50) NOT NULL CHECK (item_type IN ('question','project','roadmap')),
    item_id VARCHAR(100) NOT NULL,        -- UUID or text depending on type
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(user_id, item_type, item_id)
);

CREATE INDEX idx_bookmarks_user ON bookmarks(user_id);