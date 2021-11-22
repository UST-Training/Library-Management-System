const router = require('express').Router();
//let Exercise = require('../models/exercise.model');
let User = require('../models/user.model');
router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add').post((req,res) => {
    const userid = req.body.userid;
    const userloginid = req.body.userloginid;
    const username = req.body.username;
    const useremail = req.body.useremail;
    const userpassword = req.body.userpassword;
    const usertype = req.body.usertype;
    const userstatus = req.body.userstatus;
    const newUser = new User({userid,userloginid,username,useremail,userpassword,usertype,userstatus});

    newUser.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').get((req,res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => res.json('User Deleted'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req,res) => {
    User.findById(req.params.id)
        .then(user => {
            user.userid=req.body.userid;
            user.userloginid=req.body.userloginid;
            user.username=req.body.username;
            user.useremail=req.body.useremail;
            user.userpassword=req.body.userpassword;
            user.usertype=req.body.usertype;
            user.userstatus=req.body.userstatus;

            user.save()
                .then(() => res.json('User updated !'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;




/*const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add').post((req,res) => {
    const userid = req.body.userid;
    const userloginid = req.body.userloginid;
    const username = req.body.username;
    const useremail = req.body.useremail;
    const userpassword = req.body.userpassword;
    const usertype = req.body.usertype;
    const userstatus = req.body.userstatus;
    const newUser = new User({userid,userloginid,username,useremail,userpassword,usertype,userstatus});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;*/