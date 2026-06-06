INSERT INTO projects (title, slug, category, overview, steps, learning_outcome) VALUES
('Linux Server Setup', 'linux-server-setup', 'beginner',
 'Set up a Linux server from scratch. Install essential packages, configure firewall, create users, and secure SSH.',
 '[
   {"step": "Provision a VM (local or cloud)", "detail": "Use VirtualBox or AWS EC2 free tier."},
   {"step": "Update packages and create a sudo user", "detail": "apt update && adduser devops"},
   {"step": "Configure SSH key-based authentication", "detail": "Disable password login in sshd_config"},
   {"step": "Install and enable UFW firewall", "detail": "Allow ports 22, 80, 443"},
   {"step": "Set up automatic security updates", "detail": "unattended-upgrades"}
 ]',
 'Understand basic server administration, security hardening, and user management.'),
('Dockerized Application', 'dockerized-app', 'beginner',
 'Containerize a simple web application (e.g., Python Flask) with Docker and manage multi-container setup with Docker Compose.',
 '[
   {"step": "Write Dockerfile for Flask app", "detail": "Use python:3.9-slim base image."},
   {"step": "Build image and run container", "detail": "docker build -t flask-app ."},
   {"step": "Add Redis for session storage", "detail": "Use official Redis image."},
   {"step": "Create docker-compose.yml to define both services", "detail": "Expose ports and volumes."}
 ]',
 'Learn Docker basics, Dockerfile best practices, and multi-service orchestration.');
-- (Continue for all 12 projects)