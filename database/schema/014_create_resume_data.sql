-- Resume data stored as JSON
CREATE TABLE IF NOT EXISTS resume_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    resume_name VARCHAR(200),
    personal_info JSONB NOT NULL,
    skills JSONB,
    projects JSONB,
    experience JSONB,
    education JSONB,
    certifications JSONB,
    achievements JSONB,
    ats_score DECIMAL(5,2),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);