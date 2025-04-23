

---

# Free Chat — Real-Time Web Chat App

**Free Chat** is a simple yet powerful real-time web chat application built with **HTML**, **CSS**, and **JavaScript** — powered by a **Node.js** backend. It's exposed to the internet using **ngrok**, making it perfect for quick peer-to-peer conversations without needing to deploy to a full server.

---

## ✨ Features

- **Real-time messaging** via WebSockets
- **Simple, clean UI** for smooth chatting
- **No accounts or sign-ups needed**
- **Local-first setup**, exposed publicly via **ngrok**
- **Lightweight and fast**, ideal for demos, friends, or quick chatrooms

---

## 🛠 Tech Stack

- **Frontend:** HTML + CSS + JavaScript
- **Backend:** Node.js + Express + Socket.io
- **Expose Publicly:** [ngrok](https://ngrok.com/)
- **Live Chat:** Real-time updates with no page refreshes

---

## 🚀 How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/free-chat.git
cd free-chat

2. Install Dependencies

npm install

3. Start the Local Server

node server.js

4. Open the Chat Locally

Go to:

http://localhost:3000

5. Expose to the Internet with Ngrok

If you want others to join your chat room:

ngrok http 3000

Share the generated ngrok URL with friends to join the room.


---

📁 Project Structure

free-chat/
├── node_modules/
├── public/
│   ├── index.html
│   ├── chat.js
│   ├── styles.css
├── server.js
├── package.json
└── README.md


---

🔐 Privacy & Safety

Free Chat runs entirely peer-to-peer via your hosted server. No data is stored or logged unless you explicitly implement it. For basic or local use only.


---

⚡ Example

1. You start the server locally.


2. Open the ngrok link on your phone or share with a friend.


3. Start chatting instantly!




---

🪪 License

MIT License — free to use, modify, remix, or extend.


---

> Made by Cubic Company
“Just chat. Nothing more.
