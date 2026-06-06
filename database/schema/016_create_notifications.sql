CREATE TABLE IF NOT EXISTS notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    message TEXT,
    is_read BOOLEAN DEFAULT false,
    notification_type VARCHAR(50) DEFAULT 'general',
    link VARCHAR(255),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);