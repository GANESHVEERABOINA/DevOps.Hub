-- Salary benchmarks
CREATE TABLE IF NOT EXISTS salary_data (
    id SERIAL PRIMARY KEY,
    role VARCHAR(100) NOT NULL,          -- 'DevOps Engineer', 'SRE', etc.
    experience_level VARCHAR(50) NOT NULL CHECK (experience_level IN ('fresher','junior','mid','senior','lead')),
    location VARCHAR(100),
    currency VARCHAR(10) DEFAULT 'USD',
    min_salary DECIMAL(10,2),
    max_salary DECIMAL(10,2),
    average_salary DECIMAL(10,2),
    source VARCHAR(100),
    year INT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_salary_role_exp ON salary_data(role, experience_level);