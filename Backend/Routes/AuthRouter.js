const router = require('express').Router();
 
router.post('/login', (req,res) =>
{
    res.send("Login success");
})

router.post('/Signup', (req,res) =>
{
    res.send("Signup success");
})

module.exports = router;