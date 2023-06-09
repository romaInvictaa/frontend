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
      const { user_name, user_email, history, art, architecture } = req.body;
  
      // Consultar si el correo electrónico ya existe
      const existingUser = await pool.query('SELECT * FROM users WHERE user_email = $1', [user_email]);
  
      // Verificar si el correo electrónico ya está registrado
      if (existingUser.rows.length > 0) {
        return res.status(200).json({ message: 'Email already exists' });
      }
  
      // Insertar el usuario en la base de datos
      const response = await pool.query(
        'INSERT INTO users (user_name, user_email, history, art, architecture) VALUES ($1, $2, $3, $4, $5)',
        [user_name, user_email, history, art, architecture]
      );
  
      res.json({
        message: 'User added successfully',
        body: {
          users: { user_name, user_email, history, art, architecture }
        }
      });
    } else if (req.method === 'GET') {
      const response = await pool.query('SELECT * FROM users');
      res.status(200).json(response.rows);
    } else if (req.method === 'PUT') {
        res.status(200).json({ name: 'Method not defined' });
    }
  }
  

// obtener usuarios por correo
// export async function getUserByEmail(req, res) {
//     const { user_email } = req.body;
//     const response = await pool.query('SELECT * FROM users WHERE user_email = $1', [user_email]);
//     res.json(response.rows);
// }