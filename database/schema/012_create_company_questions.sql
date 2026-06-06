-- Questions tagged for a company (many-to-many)
CREATE TABLE IF NOT EXISTS company_questions (
    company_id INT NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    question_id UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    frequency VARCHAR(50) CHECK (frequency IN ('common','rare','medium')),
    PRIMARY KEY (company_id, question_id)
);