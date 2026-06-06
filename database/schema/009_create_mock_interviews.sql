-- Mock interview sessions
CREATE TABLE IF NOT EXISTS mock_interviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id),
    started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    finished_at TIMESTAMPTZ,
    score DECIMAL(5,2),
    strengths JSONB DEFAULT '[]',
    weaknesses JSONB DEFAULT '[]',
    feedback TEXT,
    interview_type VARCHAR(50) DEFAULT 'general'   -- e.g., 'devops', 'hr'
);

-- Individual question/answer within a mock interview
CREATE TABLE IF NOT EXISTS interview_answers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    interview_id UUID NOT NULL REFERENCES mock_interviews(id) ON DELETE CASCADE,
    question_id UUID REFERENCES questions(id),
    user_answer TEXT,
    score DECIMAL(5,2),
    feedback TEXT,
    answered_at TIMESTAMPTZ DEFAULT NOW()
);