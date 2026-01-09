import pool from './src/db.js';

const checkUsers = async () => {
    try {
        console.log('Consultando usuarios en la base de datos...');
        const res = await pool.query('SELECT * FROM users');
        if (res.rows.length === 0) {
            console.log('No hay usuarios registrados en la base de datos.');
        } else {
            console.log('Usuarios encontrados:');
            console.table(res.rows.map(u => ({ id: u.id_user, email: u.email_user, password: u.password_user })));
        }
    } catch (err) {
        console.error('Error conectando a la BD:', err.message);
    } finally {
        await pool.end();
    }
};

checkUsers();
