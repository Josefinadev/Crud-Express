const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'admin123',
    database: process.env.DB_NAME || 'cursos_online',
    port: process.env.DB_PORT || 3307
});

connection.connect((err) => {
    if(err){
        console.log(err);
    } else {
        console.log('MySQL conectado');
    }
});

module.exports = connection;