// var express = require("express");
// var router = express.Router();
// var { User } = require("../model/user");
// var bcrypt = require("bcryptjs");
// var jwt = require("jsonwebtoken");
// var mailer = require('../utils/mailer');
// var crypto = require('crypto');

// require('dotenv').config();

// const nodemailer = require('nodemailer');
// const log = console.log;

// // Step 1
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD 
//     }
// });

// // Step 2
// let mailOptions = {
//     from: 'vigneshmailerfornode@gmail.com', // TODO: email sender
//     to: 'vignesh.vmaverick@gmail.com', // TODO: email receiver
//     subject: 'Nodemailer - Test',
//     text: 'Wooohooo it works!!'
// };

// // Step 3
// transporter.sendMail(mailOptions, (err, data) => {
//     if (err) {
//         return log('Error occurs');
//     }
//     return log('Email sent!!!');
// });

// module.exports = router;