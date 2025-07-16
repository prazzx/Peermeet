const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require("./firebase");
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
  const idToken = req.headers.authorization;

  if (!idToken) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }
}

app.post("/api/protected", verifyToken, async (req, res) => {
  const { name, email} = req.user;

  let user = await User.findOne({ uid });

  if (!user) {
    user = new User({  name, email});
    await user.save();
  }

  res.send(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});