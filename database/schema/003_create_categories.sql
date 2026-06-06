-- Categories for interview questions (tool/technology)
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,   -- e.g., 'Linux', 'Docker', 'Kubernetes'
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    icon_url TEXT,
    parent_category_id INT REFERENCES categories(id),  -- self-referencing for sub-categories
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE categories IS 'Question categories (tools/technologies)';