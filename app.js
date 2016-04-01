var express       = require('express'),
	app           = express(),
	bodyParser    = require("body-parser"),
	mongoose      = require("mongoose"),
	Taqueria 	  = require("./models/taquerias.js"),
	seedDB 		  = require("./seeds"),
	passport	  = require("passport"),
	localStrategy = require("passport-local"),
	User 		  = require("./models/user")
	methodOverride = require('method-override'),
	Comment 	  = require("./models/comment"),
	flash		  = require("connect-flash");	

var  indexRoutes 	= require("./routes/index"),
	commentsRoutes  = require("./routes/comments"),
	taqueriasRoutes = require("./routes/taquerias");


// Database connect 
mongoose.connect("mongodb://adamsgreg:password@ds011158.mlab.com:11158/taquerias");
// mongoose.connect("mongodb://localhost/taquerias");


app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride("_method"));

app.set("view engine", "ejs");

app.use(flash());


// passport config
app.use(require("express-session")({
	secret: "Rain, Rain, Rain",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// allow username to be used on indiv. pages
app.use(function(req,res,next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});

app.use(indexRoutes);
app.use(taqueriasRoutes);
app.use(commentsRoutes);


var port = process.env.PORT || 3000;

app.listen(port, function (){
	console.log('Server running on ' + port);
});