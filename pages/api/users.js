const { Pool } = require('pg')

// new pool instance conect to database elephantSQL

const pool = new Pool({
    user: 'vbpuazlo',
    host: 'drona.db.elephantsql.com',
    database: 'vbpuazlo',
    password: 'v94chSwTqFJ1QvOJZfb4E68fHEK_zE7V',
    port: 5432,
})

// obtener usuarios
export default async function getUsers(req, res) {
    if (req.method === 'POST') {
        const { user_name, user_lastname, user_phone, user_email, user_city } = req.body;
        const response = await pool.query('INSERT INTO users (user_name, user_lastname, user_phone, user_email, user_city) VALUES ($1, $2, $3, $4, $5)', [user_name, user_lastname, user_phone, user_email, user_city]);
        res.json({
            message: 'User Added successfully',
            body: {
                users: { user_name, user_lastname, user_phone, user_email, user_city }

            }
        })
    } else if (req.method === 'GET') {
        const response = await pool.query('SELECT * FROM users');
        res.status(200).json(response.rows);
    } else if (req.method === 'PUT') {
<<<<<<< Updated upstream
        res.status(200).json({ name: 'XD' });
=======
        res.status(200).json({ name: 'Method not defined' });
>>>>>>> Stashed changes
    }
    //res.status(200).json({ name: 'John Doe' })
}