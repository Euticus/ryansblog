const { Pool } = require('pg');
require('dotenv').config({ path: './.env' });

const pool = new Pool({
    user: 'ryan_admin',
    host: 'express',
    database: process.env.databasename,
    password: process.env.password,
    port: 5432, // Default PostgreSQL port
});

pool.query('SELECT NOW()', (err, res) => {
    if(err) {
        console.error(`Error connecting to the database. ${err.stack}`);
    } else {
        console.log('Connected to the database.');
    }
});

module.exports = pool;