-- Seed roadmaps with their topics
INSERT INTO roadmaps (title, slug, description, estimated_hours) VALUES
('DevOps Beginner', 'devops-beginner', 'Start your DevOps journey', 40),
('Linux', 'linux', 'Linux fundamentals for DevOps', 30),
('Docker', 'docker', 'Containerization mastery', 25),
('Kubernetes', 'kubernetes', 'Orchestration deep dive', 50),
('AWS', 'aws', 'Cloud services', 60),
('Terraform', 'terraform', 'Infrastructure as Code', 40),
('Git', 'git', 'Version control', 15),
('Networking', 'networking', 'Networking essentials', 35),
('Shell Scripting', 'shell-scripting', 'Automation with bash', 20),
('Jenkins', 'jenkins', 'CI/CD pipelines', 30),
('Ansible', 'ansible', 'Configuration management', 30),
('Monitoring', 'monitoring', 'Observability', 40),
('Prometheus', 'prometheus', 'Metrics and alerting', 35),
('Grafana', 'grafana', 'Dashboarding', 20),
('DevSecOps', 'devsecops', 'Security integration', 45),
('GitOps', 'gitops', 'Operations with Git', 35),
('Cloud Engineering', 'cloud-engineering', 'Cloud architecture', 70),
('SRE', 'sre', 'Site Reliability Engineering', 60),
('Platform Engineering', 'platform-engineering', 'Internal developer platforms', 55);

-- Topics for 'DevOps Beginner' roadmap
INSERT INTO roadmap_topics (roadmap_id, title, order_index, estimated_minutes, prerequisite_topic_ids) VALUES
(1, 'What is DevOps?', 1, 30, '{}'),
(1, 'Linux Basics', 2, 120, '{}'),
(1, 'Version Control with Git', 3, 90, '{1}'),
(1, 'CI/CD Concepts', 4, 60, '{2}'),
(1, 'Containers (Docker)', 5, 180, '{2}');
-- ... continue for all roadmaps with topics