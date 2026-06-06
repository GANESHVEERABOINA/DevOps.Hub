-- ============================================
-- TABLE: users
-- Core user identity and profile data.
-- Why: Authentication and user management.
-- Dependencies: roles.id
-- ============================================
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    avatar_url TEXT,
    role_id INT NOT NULL DEFAULT 1,            -- FK to roles
    is_active BOOLEAN NOT NULL DEFAULT true,
    last_login TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_user_role FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role_id);

COMMENT ON TABLE users IS 'All registered users of the platform';
COMMENT ON COLUMN users.password_hash IS 'Bcrypt hashed password';