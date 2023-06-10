const { Pool } = require('pg')

// new pool instance conect to database elephantSQL

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 5432,
  });

export default async function getUserScore(req, res) {
    if (req.method === 'POST') {
        //console.log("req.body", req.body);
        const user_email = req.body;
        const response = await pool.query('SELECT architecture, history, art FROM users WHERE user_email = $1', [user_email.user_email]);
        //console.log("response", response);
        res.status(200).json(response.rows);
    } else if (req.method === 'GET') {
        res.status(200).json({ name: 'Method not defined' });
    }
}