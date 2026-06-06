-- ============================================
-- TABLE: roles
-- Stores system roles for authorization.
-- Why: Role-based access control.
-- Dependencies: None.
-- Common Mistakes: Forgetting to add UNIQUE constraint on name.
-- ============================================
CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,          -- e.g., 'user', 'admin', 'moderator'
    description TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE roles IS 'System roles for role-based access control';
COMMENT ON COLUMN roles.name IS 'Unique role name (user, admin)';