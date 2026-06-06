INSERT INTO achievements (name, description, criteria, points) VALUES
('First Steps', 'Complete your first roadmap topic', '{"resource_type": "roadmap_topic", "count": 1}', 10),
('Linux Explorer', 'Complete Linux roadmap', '{"roadmap_slug": "linux", "completed": true}', 50),
('Docker Whiz', 'Complete all Docker beginner projects', '{"projects": ["dockerized-app"], "count": 1}', 30),
('Interview Ready', 'Answer 100 interview questions', '{"questions_answered": 100}', 100),
('Mock Master', 'Score above 80% in a mock interview', '{"mock_interview_score": 80}', 80);