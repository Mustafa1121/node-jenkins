const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js! 101' });
});

module.exports = app;
