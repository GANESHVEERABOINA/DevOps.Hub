-- Hands-on projects
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE,
    description TEXT,
    category VARCHAR(50) NOT NULL CHECK (category IN ('beginner','intermediate','advanced')),
    overview TEXT,
    architecture_diagram_url TEXT,
    steps JSONB NOT NULL DEFAULT '[]',    -- array of step objects
    expected_output TEXT,
    learning_outcome TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE projects IS 'DevOps hands-on projects';