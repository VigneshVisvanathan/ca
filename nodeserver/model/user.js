const mongoose = require("mongoose");



const UserSchema = mongoose.Schema({
  firstn: {
    type: String,
    required: true,
  },
  lastn:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ["ADMIN", "USER"],
  },
  active: {
    type: Boolean,
    default: false
},
activeToken: {
  type: String},
activeExpires:{
  type: Date},
forgotToken: {
    type: String},
forgotExpires:{
    type: Date}
});

const User = mongoose.model('user',UserSchema);

module.exports = { User }