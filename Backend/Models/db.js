const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_CONN;
//const mongo_url = "mongodb+srv://karnaman:1234@cluster0ne.miuselj.mongodb.net/PeerMeet?retryWrites=true&w=majority&appName=Cluster0ne";

mongoose.connect(mongo_url)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));
