const mysql = require('mysql');

// change credentitals here for your mysql server
const dbCredentials = {
    host: 'localhost',
    user: 'root',
    password: 'goldtree9',
    database: 'users'
};

const connection = mysql.createConnection(dbCredentials);

connection.connect(error => {
    if(error) throw error;
    console.log("successfully connected to database");
})

connection.query(`CREATE TABLE IF NOT EXISTS Users ( 
    id int(11) not null primary key auto_increment,
    name varchar(50),
    email varchar(50),
    phone varchar(12),
    address varchar(255) )`);

module.exports = connection;