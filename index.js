const express = require('express');
const bodyParser = require('body-parser');
require('./models');
let userController = require('./controllers/user.controller')
const app = express();

app.use(bodyParser.json());

app.get("/", function (req,res){
    res.send('Hello World');
});

app.get('/add', userController.addUser);

app.get('/users', userController.getUsers);

app.get('/users/:id', userController.getUser);

app.post('/users', userController.postUser);

app.delete('/users/:id', userController.deleteUser);

app.patch('/users/:id', userController.updateUser);

app.get('/query', userController.queryUser);

// User.sync();
// User.sync({force: true });
// Contact.sync({force: true });
// User.sync({alter: true });
// User.drop();

app.listen(3006, () => {
    console.log('App will run on: http://localhost:3006');
});