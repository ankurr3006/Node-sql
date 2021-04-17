const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/user.model');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/users', (req, res) => {
    User.getAll((err, data) => {
        if(err) {
            return ;res.status(500).send("Internal server error");
        }
        res.json(data);
    });
})

app.post('/user', (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    });

    User.create(user, (err, data) => {
        if(err) {
            return res.status(500).send("Internal server error");
        }
        res.json(data);
    })
})

app.get('/user',(req,res) => {
    User.getByName(req.query.name, (err,data) => {
        if(err) {
            return res.status(500).send('Internal server Error');
        }
        res.json(data);
    })
})

app.listen(3000, () => {
    console.log("app listening on port", 3000);
})