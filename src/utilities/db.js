import pg from 'pg';

const { Pool } = pg;

export function conection() {
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
            console.log('Conexión exitosa con la base de datos...');
        }
    });
}