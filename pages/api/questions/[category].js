const { Pool } = require('pg');

// new pool instance conect to database elephantSQL

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

export default async function getQuestionById(req, res) {
  if (req.method === 'GET') {
    const { category } = req.query;
    const response = await pool.query('SELECT * FROM questions WHERE category = $1 ORDER BY RANDOM () LIMIT 5;', [
      category,
    ]);
    let questions = [];
    response.rows.forEach((question) => {
      questions.push({
        id: question.id,
        question: question.question,
        options: [ question.option1, question.option2, question.option3, question.option4 ],
        answer: question.answer,
        url: question.url,
        text: question.text,
      });
    });
    res.status(200).json(questions);
  } else if (req.method === 'POST') {

    const { correctAnswers, user_email } = req.body;
    const { category } = req.query;

    // console.log(category, correctAnswers, user_email)
    // Insertar el usuario en la base de datos
    const query = 'UPDATE users SET ' + category + '=$1 WHERE user_email=$2';
    const response = await pool.query(
      query, [correctAnswers, user_email]
    );

    res.json({
      message: 'Data updated successfully',
    });
  } else {
    res.status(404).json({ name: 'Method not defined' });
  }
}
