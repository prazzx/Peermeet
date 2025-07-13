const { signup } = require('../Controllers/AuthControllers');
const { signupValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();
 
router.post('/login', (req,res) =>
{
    res.send("Login success");
})

router.post('/Signup', signupValidation, signup);

module.exports = router;