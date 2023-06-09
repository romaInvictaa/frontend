const { Pool } = require('pg');

// new pool instance conect to database elephantSQL

const pool = new Pool({
  user: 'vbpuazlo',
  host: 'drona.db.elephantsql.com',
  database: 'vbpuazlo',
  password: 'v94chSwTqFJ1QvOJZfb4E68fHEK_zE7V',
  port: 5432,
});

export default async function getQuestionById(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const response = await pool.query('SELECT * FROM questions WHERE id = $1', [
      id,
    ]);
    res.status(200).json(response.rows);
  } else {
    res.status(404).json({ name: 'Method not defined' });
  }
}
