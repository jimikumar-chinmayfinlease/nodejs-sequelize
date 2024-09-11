const express = require('express');
const bodyParser = require('body-parser');
require('./models');
const app = express();

app.use(bodyParser.json());

app.get("/", function (req,res){
    res.send('Hello World');
});

// User.sync();
// User.sync({force: true });
// Contact.sync({force: true });
// User.sync({alter: true });
// User.drop();

app.listen(3006, () => {
    console.log('App will run on: http://localhost:3006');
});