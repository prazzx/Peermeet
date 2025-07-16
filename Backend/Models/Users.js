const { required } = require("joi");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Userschema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: function() {
                // Only require password if googleId is not present
                return !this.googleId;
            }
        },
        googleId: {
            type: String,
            required: false
        },
        isGoogleUser: {
            type: Boolean,
            default: false
        }
})

const Usermodel = mongoose.model('Users', Userschema);
module.exports = Usermodel;