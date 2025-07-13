const { required } = require("joi");
const mongoose = require("mongoose");
const schema = mongoose.schema;

const Userschema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unqiue: true,
        },
        password: {
            type: String,
            required: true,
        },
})

const Usermodel = mongoose.model('Users', Userschema);
module.exports = Usermodel ;

