const { Pool } = require('pg')

// new pool instance conect to database elephantSQL

const pool = new Pool({
    user: 'vbpuazlo',
    host: 'drona.db.elephantsql.com',
    database: 'vbpuazlo',
    password: 'v94chSwTqFJ1QvOJZfb4E68fHEK_zE7V',
    port: 5432,
})

export default async function getUserByEmail(req, res) {
    if (req.method === 'POST') {
        //console.log("req.body", req.body);
        const user_email = req.body;
        const response = await pool.query('SELECT * FROM users WHERE user_email = $1', [user_email.user_email]);
        //console.log("response", response);
        res.status(200).json(response.rows);
    } else if (req.method === 'GET') {
        res.status(200).json({ name: 'Method not defined' });
    }
}