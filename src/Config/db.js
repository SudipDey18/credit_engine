import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config({path: '.././.env'});

const db = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.CA_CERTIFICATE
    }
});


export default db;