import pool from '../db.js';

export const createUser = async (userData) => {
    const { name, lastname, email, password, percentage } = userData;
    const result = await pool.query(
        `INSERT INTO users (name_user, last_name_user, email_user, password_user, percentage) 
        VALUES ($1, $2, $3, $4, $5) 
        RETURNING id_user, name_user, last_name_user, email_user, percentage, created_at`,
        [name, lastname, email, password, percentage || 0]
    );
    return result.rows[0];
};

export const getAllUsers = async () => {
    const result = await pool.query(
        'SELECT id_user, name_user, last_name_user, email_user, percentage, created_at FROM users ORDER BY created_at DESC'
    );
    return result.rows;
};

export const getUserById = async (id) => {
    const result = await pool.query(
        'SELECT id_user, name_user, last_name_user, email_user, percentage, created_at FROM users WHERE id_user = $1',
        [id]
    );
    return result.rows[0] || null;
};

export const getUserByEmail = async (email) => {
    const result = await pool.query(
        'SELECT * FROM users WHERE email_user = $1',
        [email]
    );
    return result.rows[0] || null;
};

export const updateUser = async (id, userData) => {
    const { name, lastname, percentage } = userData;
    const result = await pool.query(
        `UPDATE users 
        SET name_user = $1, last_name_user = $2, percentage = $3 
        WHERE id_user = $4 
        RETURNING id_user, name_user, last_name_user, email_user, percentage, created_at`,
        [name, lastname, percentage, id]
    );
    return result.rows[0] || null;
};

export const deleteUser = async (id) => {
    const result = await pool.query(
        'DELETE FROM users WHERE id_user = $1 RETURNING id_user',
        [id]
    );
    return result.rowCount > 0;
};