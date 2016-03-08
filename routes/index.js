var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');

// Index
router.get("/", function(req, res){
	res.render('landing');
});


// register form

router.get("/register", function(req, res){
	res.render('register');
});

router.post("/register", function(req, res) {
	var newUser = new User({username: req.body.username});
	
	User.register(newUser, req.body.password, function(err, user){
		if(err){
			console.log(err);
			req.flash("error", err.message)
			return res.render("register")
		} else {
			passport.authenticate("local")(req, res, function(){
				req.flash("success", "Successfully joined as " + user.username);
				res.redirect("/taquerias");
			})
		}
	});
});


//login
router.get("/login", function(req, res){
	res.render('login');
});

router.post("/login", passport.authenticate('local', 
		{successRedirect: "/taquerias",
		 failureRedirect: "/login"
		}), function(req, res) {});
	

//logout
router.get("/logout", function(req, res){
	req.logout();
	req.flash("success", "Logged you out.");
	res.redirect("/taquerias");
});


module.exports = router;