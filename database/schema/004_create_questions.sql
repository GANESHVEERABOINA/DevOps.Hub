-- Interview questions with various difficulty levels
CREATE TABLE IF NOT EXISTS questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id INT NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    simple_explanation TEXT,
    interview_answer TEXT,
    real_world_example TEXT,
    common_mistakes TEXT,
    difficulty VARCHAR(20) NOT NULL CHECK (difficulty IN ('basic','intermediate','advanced','scenario','production','troubleshooting')),
    related_question_ids UUID[] DEFAULT '{}',   -- array of question IDs for easy linking
    company_id INT REFERENCES companies(id),
    created_by UUID REFERENCES users(id),
    is_verified BOOLEAN DEFAULT false,
    view_count INT DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_questions_category ON questions(category_id);
CREATE INDEX idx_questions_difficulty ON questions(difficulty);
CREATE INDEX idx_questions_search ON questions USING GIN (to_tsvector('english', question_text || ' ' || coalesce(interview_answer,'')));

COMMENT ON TABLE questions IS 'Complete interview question bank';