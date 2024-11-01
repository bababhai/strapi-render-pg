const express = require('express');
const app = express();
const port = parseInt(process.env.PORT, 10) || 10000;

app.get('/', (req, res) => {
  res.send('Hello, Render!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});