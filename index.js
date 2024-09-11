const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('./models')

app.use(bodyParser.json());

app.get("/", function (req,res){
    res.send('Hello World');
});

app.listen(3006, () => {
    console.log('App will run on: http://localhost:3006');
});