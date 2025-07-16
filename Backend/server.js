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

app.get("/help", (req, res) => {
  res.send("Backend is working!");
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', Router);

async function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
console.log("Authorization header:", authHeader);

 /* if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized" });;
  } */

  const idToken = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;


  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).send(error);
  }
}

app.post("/api/protected", verifyToken, async (req, res) => {
  try {
    const { name, email, uid } = req.user;
    
    let user = await User.findOne({ email });

    if (!user) {
      // Create new user for Google sign-in
      user = new User({ 
        name, 
        email, 
        googleId: uid,
        isGoogleUser: true
        // Don't set password field for Google users
      });
      await user.save();
    }
    
    res.json(user);
  } catch (error) {
    console.error("Error in protected route:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});