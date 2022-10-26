const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();
app.use(express.static('public'));

app.listen(3000,()=> {
    console.log("servidor escuchando puerto 3000")
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/register',  (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/images/styles.css'));
});



