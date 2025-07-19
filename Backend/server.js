const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./Models/db');
const Router = require('./Routes/profilerouter');

const PORT = process.env.PORT;

app.get("/help", (req, res) => {
  res.send("Backend is working!");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.use('/api/profile', Router );

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});