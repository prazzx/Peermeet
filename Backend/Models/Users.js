const { required } = require("joi");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Userschema = new mongoose.Schema({
    fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  bio: {
    type: String,
    maxlength: 500
  },
  role: {
    type: String,
    trim: true
  },
  interests: {
    type: [String],
    default: []
  },
  profilePhoto: {
    type: String, // store the file URL or path
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Usermodel = mongoose.model('Users', Userschema);
module.exports = Usermodel;