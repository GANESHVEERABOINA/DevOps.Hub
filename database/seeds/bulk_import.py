import json
import psycopg2
import os

conn = psycopg2.connect(
    host="localhost",
    database="devopshub",
    user="devopshub",
    password="password"
)

cur = conn.cursor()

mapping = {
    "linux_questions.json": 1,
    "docker_questions.json": 2,
    "kubernetes_questions.json": 3,
    "aws_questions.json": 4,
    "terraform_questions.json": 5,
    "jenkins_questions.json": 6,
    "git_questions.json": 7,
    "github_questions.json": 8,
    "shell_scripting_questions.json": 9,
    "networking_questions.json": 10,
    "ansible_questions.json": 11,
    "prometheus_questions.json": 12,
    "grafana_questions.json": 13,
    "sonarqube_questions.json": 14,
    "monitoring_questions.json": 15,
    "cicd_questions.json": 16,
    "nginx_questions.json": 17,
    "apache_questions.json": 18,
    "devsecops_questions.json": 19,
    "gitops_questions.json": 20,
    "python_for_devops_questions.json": 21,
    "cloud_fundamentals_questions.json": 22,
    "hr_questions.json": 23,
    "salary_negotiation_questions.json": 24,
}

for filename, category_id in mapping.items():

    if not os.path.exists(filename):
        print(f"SKIPPED: {filename} not found")
        continue

    with open(filename, "r", encoding="utf-8") as f:
        questions = json.load(f)

    imported = 0
    skipped = 0

    print(f"\nProcessing {filename} ({len(questions)} questions)")

    for q in questions:

        try:
            question_text = q.get("question", "").strip()

            if not question_text:
                skipped += 1
                continue

            cur.execute("""
                SELECT id
                FROM questions
                WHERE question_text = %s
                AND category_id = %s
            """, (question_text, category_id))

            if cur.fetchone():
                skipped += 1
                continue

            common_mistakes = (
                q.get("common_mistake")
                or q.get("common_mistakes")
                or ""
            )

            difficulty = q.get("difficulty", "General")

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
                question_text,
                q.get("simple_explanation", ""),
                q.get("interview_answer", ""),
                q.get("real_world_example", ""),
                common_mistakes,
                difficulty,
                category_id
            ))

            imported += 1

        except Exception as e:
            print(f"ERROR in {filename}")
            print(e)
            skipped += 1

    conn.commit()

    print(
        f"{filename}: Imported={imported}  Skipped={skipped}"
    )

conn.close()

print("\nDONE")