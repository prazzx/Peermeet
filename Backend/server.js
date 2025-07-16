const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require("./firebase");
const User = require('./Models/Users');
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

async function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
console.log("Authorization header:", authHeader);

  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized" });;
  }

  const idToken = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;


  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });;
  }
}

app.post("/api/protected", verifyToken, async (req, res) => {
  const { uid, name, email } = req.user;
let user = await User.findOne({ uid });

if (!user) {
  user = new User({ uid, name, email });
  await user.save();
}
  res.send(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});