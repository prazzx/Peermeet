const UserModel = require("../Models/Users");
const bcrypt = require('bcrypt');

const signup = async (req , res) =>{
    try{
        const {name, email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(409).json({message: "User already exists", success:false});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({name, email, password: hashedPassword});
        await newUser.save();
        res.status(201).json({message: "Signup Successful", success:true});
    }
    catch(err){
        console.error("Signup error:", err);
        return res.status(500).json({message: "Internal Error", success:false, error: err.message});
    }
}


const login = async (req , res) =>{
    try{
        const {name, email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(403).json({message: "User or password is incorrect", success:false});
        }
        const isPassequal = await bcrypt.compare(password, user.password);
        if(!isPassequal){
            return res.status(409).json({message: "User or password is incorrect", success:false});
        }
        res.status(200).json({ message: "Login successful", success: true });
    }
    catch(err){
        console.error("Signup error:", err);
        return res.status(500).json({message: "Internal Error", success:false, error: err.message});
    }
}

module.exports = { signup,
    login };
