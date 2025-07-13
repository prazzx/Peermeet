const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
require('./Models/db');

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});