const { Pool } = require('pg')

// new pool instance conect to database elephantSQL

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: 5432,
});


// obtener usuarios
export default async function getUsers(req, res) {
    if (req.method === 'POST') {
      const { correctAnswers } = req.body;
  
      // Insertar el usuario en la base de datos
      const response = await pool.query(
        'UPDATE users SET (user_name, user_email, history, art, architecture) VALUES ($1, $2, $3, $4, $5)',
        [user_name, user_email, history, art, architecture]
      );
  
      res.json({
        message: 'User added successfully',
        body: {
          users: { user_name, user_email, history, art, architecture }
        }
      });
    } else {
        res.status(200).json({ name: 'Method not defined' });
    }
  }