const sql = require('../db');

const User = function(user) {
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.address = user.address;
}

User.create = function(newUser, result) {
    sql.query(`INSERT INTO Users(name, email, phone, address) VALUES ('${newUser.name}', '${newUser.email}', '${newUser.phone}', '${newUser.address}');`, (err, res) => {
        if(err) {
            console.log(err);
            result(err, null);
            return;
        }
        console.log('created user: ', { id: res.insertId, ...newUser});
        result(null, {id: res.insertId, ...newUser});
    })
}

User.getAll = function(result) {
    sql.query('SELECT * FROM Users', (err, res) => {
        if(err) {
            console.log(err);
            result(err, null);
            return;
        }
        console.log('Users: ', res);
        result(null, res);
    })
}

User.getByName = function(name, result) {
    sql.query(`SELECT * FROM Users where name='${name}'`,(err, res) => {
        if(err) {
            console.log(err);
            result(err, null);
            return;
        }
        console.log(res);
        result(null,res);
    })
}

module.exports = User;