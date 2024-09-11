const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const User = require('./models/user');

app.use(bodyParser.json());

app.get("/", function (req,res){
    res.send('Hello World');
});

// User.sync();
User.sync({force: true });
// User.sync({alter: true });
// User.drop();

app.listen(3006, () => {
    console.log('App will run on: http://localhost:3006');
});