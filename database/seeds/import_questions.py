import json
import psycopg2

conn = psycopg2.connect(
    host="localhost",
    database="devopshub",
    user="devopshub",
    password="devops123"
)

cur = conn.cursor()

with open("kubernetes_questions.json", "r", encoding="utf-8") as f:
    questions = json.load(f)    
for q in questions:
   cur.execute("""
    INSERT INTO questions (
        question_text,
        simple_explanation,
        interview_answer,
        real_world_example,
        common_mistakes,
        difficulty,
        category_id
    )
    VALUES (%s,%s,%s,%s,%s,%s,%s)
""", (
    q["question"],
    q["simple_explanation"],
    q["interview_answer"],
    q["real_world_example"],
    q["common_mistake"],
    q["difficulty"],
    3
))

conn.commit()

print(f"Imported {len(questions)} questions")
