const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});