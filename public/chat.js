const socket = io();

const loginPage = document.getElementById('loginPage');
const chatPage = document.getElementById('chatPage');
const usernameInput = document.getElementById('username');
const joinChatButton = document.getElementById('joinChat');
const messagesList = document.getElementById('messages');
const messageInput = document.getElementById('input');
const fileInput = document.getElementById('fileInput');
const sendMessageButton = document.getElementById('sendMessage');
const tabItems = document.querySelectorAll('.tab-item');
const settingsButton = document.getElementById('settingsButton');
const backButton = document.getElementById('backButton');


let username = '';

// Join chat button click event
joinChatButton.addEventListener('click', function() {
    username = usernameInput.value.trim();
    if (username) {
        socket.emit('join chat', username);
        loginPage.classList.add('hidden');
        chatPage.classList.remove('hidden');
        setActiveTab(tabItems[0]); // Set 'Chats' tab as active by default
    }
});


// Send message button click event
sendMessageButton.addEventListener('click', function() {
    const message = messageInput.value.trim();
    if (message) {
        socket.emit('chat message', message);
        messageInput.value = '';
    }
});

// Settings button functionality
settingsButton.addEventListener('click', () => {
    chatPage.classList.add('hidden');
    settingsPage.classList.remove('hidden');
});

// Back button functionality
backButton.addEventListener('click', () => {
    settingsPage.classList.add('hidden');
    chatPage.classList.remove('hidden');
});

// Handle join chat response
socket.on('join chat response', (data) => {
    if (data.success) {
        loginPage.classList.add('hidden');
        chatPage.classList.remove('hidden');
    } else {
        alert('Failed to join chat. Please try again.');
    }
});


// File input change event for file upload
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            socket.emit('file share', data.fileUrl);
        })
        .catch(error => {
            console.error('Error uploading file:', error);
        });
    }
});

// Socket event for receiving chat messages
socket.on('chat message', function(data) {
    const messageElement = document.createElement('li');
    messageElement.textContent = `${data.user}: ${data.msg}`;
    messagesList.appendChild(messageElement);
    messagesList.scrollTop = messagesList.scrollHeight;
});

// Function to set active tab and update UI
function setActiveTab(tab) {
    tabItems.forEach(item => {
        item.classList.remove('active');
    });
    tab.classList.add('active');
}

// Tab click event listener to switch tabs
tabItems.forEach(tab => {
    tab.addEventListener('click', function() {
        setActiveTab(tab);
        // Add logic to handle tab switching based on tab's text or index
        // For example:
        // if (tab.textContent === 'Chats') {
        //     // Show chat messages
        // } else if (tab.textContent === 'Status') {
        //     // Show status messages
        // } else if (tab.textContent === 'Calls') {
        //     // Show call logs
        // }
    });
});

// Activate tab functionality
function activateTab(tabId) {
    tabs.forEach(tab => {
        if (tab.id === tabId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    tabContents.forEach(content => {
        if (content.id === `${tabId}-content`) {
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden');
        }
    });
}

// Other functionality (send message, tab switching, settings button, back button) remains unchanged


// Tab switching functionality
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activateTab(tab.id);
    });
});

// Settings button functionality
settingsButton.addEventListener('click', () => {
    chatPage.classList.add('hidden');
    settingsPage.classList.remove('hidden');
});

// Back button functionality
backButton.addEventListener('click', () => {
    settingsPage.classList.add('hidden');
    chatPage.classList.remove('hidden');
});

// Send message functionality
sendMessageButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        socket.emit('chat message', message);
        messageInput.value = '';
    }
});

// Display received messages
socket.on('chat message', (data) => {
    const messageElement = document.createElement('li');
    messageElement.textContent = `${data.user}: ${data.msg}`;
    messagesList.appendChild(messageElement);
    messagesList.scrollTop = messagesList.scrollHeight;
});

// Other functionality (send message, tab switching, settings button, back button) remains unchanged

// Tab switching functionality
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetContentId = tab.dataset.target;
        tabContents.forEach(content => {
            if (content.id === targetContentId) {
                content.classList.remove('hidden-tab-content');
            } else {
                content.classList.add('hidden-tab-content');
            }
        });
        tabs.forEach(t => t.classList.remove('active-tab'));
        tab.classList.add('active-tab');
    });
});

// Settings button functionality
settingsButton.addEventListener('click', () => {
    chatPage.classList.add('hidden');
    settingsPage.classList.remove('hidden');
});

// Back button functionality
backButton.addEventListener('click', () => {
    settingsPage.classList.add('hidden');
    chatPage.classList.remove('hidden');
});

// Handle join chat response
socket.on('join chat response', (data) => {
    if (data.success) {
        loginPage.classList.add('hidden');
        chatPage.classList.remove('hidden');
    } else {
        alert('Failed to join chat. Please try again.');
    }
});
