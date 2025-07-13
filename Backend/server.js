const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
require('./Models/db');
const Router = require('./Routes/AuthRouter');

const PORT = process.env.PORT;

app.get("/api", (req, res) => {
  res.send("Backend is working!");
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', Router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});