const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('Un utilisateur s\'est connecté');

    socket.on('disconnect', () => {
        console.log('Un utilisateur s\'est déconnecté');
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Serveur démarré sur le port ${port}`));