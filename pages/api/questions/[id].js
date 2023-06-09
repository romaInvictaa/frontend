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
    const { id } = req.query;
    const response = await pool.query('SELECT * FROM questions WHERE id = $1', [
      id,
    ]);
    const question = {
      id: response.rows[0].id,
      question: response.rows[0].question,
      options: [ response.rows[0].option1, response.rows[0].option2, response.rows[0].option3, response.rows[0].option4 ],
      answer: response.rows[0].answer,
    }
    res.status(200).json(question);
  } else {
    res.status(404).json({ name: 'Method not defined' });
  }
}
