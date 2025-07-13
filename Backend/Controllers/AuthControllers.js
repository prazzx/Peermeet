const bcrypt = require('bcrypt');
const Usermodel = require("../Models/Users");

const signup = async (req , res) =>{
    try{
        const {name, email, password} = req.body;
        const user = await Usermodel.findOne({email});
        if(user){
            return res.status(409)
            .json({message: "User already exists", success:false});
        }
        const Usermodel = new Usermodel({name, email, password});
        Usermodel.password = await bcrypt.hash(password, 10);
        await Usermodel.save();
        res.status(201)
        .json({message: "Signup Successful",
            success:true
        })
    }
    catch(err){
        return res.status(500)
            .json({message: "Internal Error", 
                success:false});
    }

}


module.exports = {
    signup
}