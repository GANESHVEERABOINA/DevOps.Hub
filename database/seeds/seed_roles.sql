INSERT INTO roles (name, description) VALUES 
('user', 'Standard registered user'),
('admin', 'Platform administrator with full access'),
('moderator', 'Content moderator')
ON CONFLICT (name) DO NOTHING;