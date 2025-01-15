const socket = io();

// DOM element for the user list
const userList = document.getElementById('userList');

// Update user list when the server sends user status
socket.on('user status', (users) => {
    userList.innerHTML = ''; // Clear previous user list
    Object.keys(users).forEach(userId => {
        const user = users[userId];
        if (user.online) { // Only display online users
            const userDiv = document.createElement('div');
            userDiv.classList.add('user-item'); // Apply CSS style for user item
            userDiv.textContent = user.username;
            userList.appendChild(userDiv);
        }
    });
});

// Handle back button click to go back to chat page (index.html)
backToChatButton.addEventListener('click', () => {
    window.location.href = '/index.html'; // Redirect to index.html
});

// Handle start call button click
startCallButton.addEventListener('click', () => {
    socket.emit('start call'); // Notify server about call start
});

// Handle end call button click
endCallButton.addEventListener('click', () => {
    socket.emit('end call'); // Notify server about call end
});

// Handle call started event from server
socket.on('call started', () => {
    alert('Call started'); // Placeholder for call functionality
});

// Handle call ended event from server
socket.on('call ended', () => {
    alert('Call ended'); // Placeholder for call functionality
});
