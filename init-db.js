const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./megan.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the Megan database.');
});

db.serialize(() => {
  // Create table for chat messages
  db.run(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL,
    name TEXT,
    data TEXT NOT NULL, -- text content or file path
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Closed the database connection.');
});
