const { log } = require('console');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3030;

const publicPathFold = path.resolve(__dirname, './public')

app.use(express.static(publicPathFold));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('views/home.html'))
});

app.post('/', (req, res) => {
    res.sendFile(path.resolve('views/home.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('views/register.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('views/login.html'))
});

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}/`)
});