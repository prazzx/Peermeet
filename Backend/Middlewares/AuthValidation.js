const Joi = require('joi');

const signupValidation = (req,res,next) =>{
    const schema = Joi.object({
        name: Joi.string().min(3).maximum(100).required(),
        email: Joi.string().email.required(),
        password: Joi.string().min(4).maximum(100).required(),
    })
}