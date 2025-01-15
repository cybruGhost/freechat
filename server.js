const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let users = {}; // Store users

app.use(express.static('public')); // Serve static files from 'public' directory

io.on('connection', (socket) => {
    socket.on('join chat', (username) => {
        if (!username) {
            socket.emit('error', 'Username is required');
            return;
        }
        users[socket.id] = { username, online: true };
        io.emit('user status', users); // Broadcast user status to all users
        console.log(`${username} joined the chat`);
    });

    socket.on('chat message', (msg) => {
        const user = users[socket.id];
        if (user) {
            io.emit('chat message', { user: user.username, msg });
        }
    });

    socket.on('disconnect', () => {
        if (users[socket.id]) {
            console.log(`${users[socket.id].username} disconnected`);
            delete users[socket.id];
            io.emit('user status', users); // Update user status
        }
    });
});

const PORT = process.env.PORT || 3000; // Use the port specified by the environment or default to 3000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
