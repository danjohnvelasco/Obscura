const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema(
  {
    email: {type: String, required: [true, "No email provided"]},
    password: {type: String, required: [true, "No password provided"]},
    userName: {type: String, required: [true, "No userName provided"]},
    firstName: {type: String, required: [true, "No firstName provided"]},
    lastName: {type: String, required: [true, "No lastName provided"]},
    profilePic: {type: String},
    bio: {type: String},
    mobile: {type: String, required: [true, "No mobile number provided"]},
    telephone: {type: String},
    address: {type: String},
    followers: [{
         type: Schema.Types.ObjectId, 
         ref: 'users', 
         required: [true, 'no user id provided for followers user'],      
    }],
    following: [{
        type: Schema.Types.ObjectId, 
        ref: 'users', 
        required: [true, 'no user id provided for following user'],      
    }]
  }
);

module.exports = mongoose.model('users', UserSchema);