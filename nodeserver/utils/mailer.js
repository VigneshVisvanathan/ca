var nodemailer = require('nodemailer');
var _ = require('lodash');
require('dotenv').config();

// // Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD 
    }
});



var defaultMail = {
    from: 'vigneshmailerfornode@gmail.com',
    text: 'activation',
};



    
    // send email
    module.exports =  mail=>  transporter.sendMail(mail, function(error, info){
        mail = _.merge({}, defaultMail, mail);
        if(error) return console.log(error);
        console.log('mail sent:', info.response);
    });


