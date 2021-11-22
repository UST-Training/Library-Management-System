const router = require('express').Router();
router.route('/login').post((req,res) => {
//app.post("/login", (req, res)=> {
    const { useremail, userpassword} = req.body
    User.findOne({ useremail: useremail}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
})
module.exports = router;