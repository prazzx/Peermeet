const mongoose = require("mongoose");
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
  phoneNumber:{
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
 /* instagram: {
    type: String,
    trim: true,
    default: ''
  },
  facebook: {
    type: String,
    trim: true,
    default: ''
    
  },*/
  createdAt: {
    type: Date,
    default: Date.now
  },
  interestEmbedding: {
  type: [Number],
  default: [],
}
})

const Usermodel = mongoose.model('Users', Userschema);
module.exports = Usermodel;