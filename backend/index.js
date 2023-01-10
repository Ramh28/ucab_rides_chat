const express = require('express');
const chats = require('./data/data.js');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from the server');
});

app.get('/api/chat', (req, res) => {
    res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
    const chat = chats.find((c) => c._id === req.params.id);
    res.send(chat);
});

app.listen(3000, console.log('Server is running on port 3000'));