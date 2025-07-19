const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./Models/Users');
require('dotenv').config();
require('./Models/db');
//const Router = require('./Routes');

const PORT = process.env.PORT;

app.get("/help", (req, res) => {
  res.send("Backend is working!");
});

app.use(bodyParser.json());
app.use(cors());


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});