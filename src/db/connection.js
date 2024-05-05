/* Importaciones externas */
const { Pool } = require('pg');

const pool = new Pool ({
    host: 'localhost',
    database: 'dbactivities',
    user: 'devmontana',
    password: '+HomerO0701'
});

pool.connect((error) => {
    if (error) {
        throw error;
    } else {
        console.log('Conexión exitosa con la base de datos!');
    }
});

module.exports = {
    pool
}