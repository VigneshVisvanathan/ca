var express = require("express");
var router = express.Router();
var { User } = require("../model/user");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var mailer = require('../utils/mailer');
var crypto = require('crypto');


/* GET users listing. */
router.post("/register", async function (req, res, next) {
  req.body.userType = "USER";

  bcrypt.genSalt(10, function (err, salt) {
    if (err) throw err;
    bcrypt.hash(req.body.password, salt, async function (err, hash) {
      if (err) throw err;
      req.body.password = hash;
      
        

      let user = new User(req.body);
      try {
      // Generate 20 bit activation code, ‘crypto’ is nodejs built in package.
      await crypto.randomBytes(20, function (err, buf) {
            
        // Ensure the activation code is unique.
        user.activeToken = user._id 
        buf.toString('hex');
        
        // Set expiration time is 24 hours.
        user.activeExpires = Date.now() + 24 * 3600 * 1000;
            var link = 'http://localhost:7000/users/account/active/'
                       + user.activeToken;
              
            // Sending activation email
            mailer({
                to: req.body.email,
                subject: 'Welcome',
                html: 'Please click <a href="' + link + '"> here </a> to activate your account.'
            });
          
      
        user.save();
        res.json({
          message: "User Created",
        });
      });
    } catch (error) {
        console.log(error);
        res.status(500).json({
          message: "User not created",
        });
      
      }
    });
    });
  });



router.post("/login", async function (req, res) {
  
  let user = await User.findOne({ email: req.body.email });
  
  if (user && user.active) {
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      if (err) throw err;
      if (result) {
        jwt.sign(
          { id: user._id, type: user.userType },
          process.env.JWT_SECRET,
          { expiresIn: "1h" },
          function (err, token) {
            if (err) throw err;
            res.status(200).json({
              message: "Correct",
              token: token,
            });
          }
        );
      } else {
        res.status(200).json({
          message: "Password Wrong",
        });
      }
    });
  } else {
    res.status(401).json({
      message: "E-Mail not found",
    });
  }
});

router.post("/forgot", async function (req, res) {
  
  let user = await User.findOne({ email: req.body.email });
  
  if (user && user.active) {
    crypto.randomBytes(20, function (err, buf) {
      if (err) throw err;
            
        // Ensure the activation code is unique.
        user.forgotToken = user._id 
        buf.toString('hex');
        
        // Set expiration time is 24 hours.
        user.forgotExpires = Date.now() + 24 * 3600 * 1000;
            var link = 'http://localhost:7000/users/account/forgot/'
                       + user.forgotToken;
              
            // Sending activation email
            mailer({
                to: req.body.email,
                subject: 'Welcome',
                html: 'Please click <a href="' + link + '"> here </a> to reset password.'
            });
            user.save(function (error, user) {
              if (error) return next(error);
    
              // activation success
              res.json({
                message: "Mail sent",
              })
          });

      });
    } 
  else {
    res.status(401).json({
      message: "E-Mail not found",
    });
  }
});

router.get('/account/active/:activeToken', function (req, res, next) {

  // find the corresponding user
   User.findOne({
      activeToken: req.params.activeToken,      
      activeExpires: {$gt: Date.now()}
  }, function (err, user) {
      if (err) return next(err);
      
      // invalid activation code
      if (!user) {
          return res.json({
            message: "E-Mail not found",
          })
      }

      // activate and save
      user.active = true;
      console.log('tokenroute')
      user.save(function (err, user) {
          if (err) return next(err);

          // activation success
          res.json({
            message: "E-Mail found",
          })
      });
  });
});

router.get('/:forgotToken', function (req, res, next) {

  // find the corresponding user
   User.findOne({
      forgotToken: req.params.forgotToken,      
      forgotExpires: {$gt: Date.now()}
  }, function (err, user) {
      if (err) return next(err);
      
      // invalid activation code
      if (!user) {
        return res.json({
          message: "E-Mail not found",
        })
    }
     
     return res.render('index');
    
      
  });
});



module.exports = router;