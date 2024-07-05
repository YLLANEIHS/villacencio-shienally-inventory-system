// server.js
import express from 'express';

const app = express();


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/home', (req, res) => {
  res.send('This is a sample home');
});

app.get('/author', (req, res) => {
  res.send('Shienally Villacencio');
});

app.get('/contact', (req, res) => {
  res.send('villacencioshienally@gmail.com');
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
