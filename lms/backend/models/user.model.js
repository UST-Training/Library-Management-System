const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
   /* username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlwngth: 3
    },*/
    userid: {type: Number,required: true},
    userloginid: {type: Number,required: true},
    username: {type: String, required: true},
    useremail: {type: String, required: true},
    userpassword: {type: String, required: true},
    usertype: {type: String,required: true},
    userstatus: {type: String,required: true}
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;