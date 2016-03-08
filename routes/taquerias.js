var express  = require('express');
var router   = express.Router();
var Taqueria 	= require('../models/taquerias');
var middleware = require('../middleware');


//INDEX of taquerias

router.get("/taquerias", function(req, res){
	// Search DB
	Taqueria.find({}, function(err, taqueriaRecords){
		if(err) {
			console.log("error..");
		} else {
			res.render("taquerias/index", {taquerias: taqueriaRecords, currentUser: req.user});
		}
	});
});



// CREATE new taqueria

router.post("/taquerias", middleware.isLoggedIn, function(req, res){
	var name 			= req.body.name,
		image 			= req.body.image,
		description 	= req.body.description,
		address 		= req.body.address,
		bikeparking 	= req.body.bikeparking,
		barter 			= req.body.barter
		salsabar 		= req.body.salsabar,
		price			= req.body.price,
		author 			= {
							id: req.user._id,
							username: req.user.username
						   };

	var newTaqueria = {name: name, image: image, description: description, address: address, bikeparking: bikeparking, barter: barter, salsabar: salsabar, price: price, author:author };

	
	Taqueria.create(newTaqueria, function(err, newAddition){
		if (err) {
			console.log(err)
		} else {
			console.log("newly created taqueria!");
			console.log(newAddition)
		}
	})

	// taquerias.push(newTaqueria);

	res.redirect("/taquerias");
});



// NEW taqueria form

router.get("/taquerias/new", middleware.isLoggedIn, function(req, res){
	res.render('taquerias/new');
});



// SHOW details about each taqueria

router.get("/taquerias/:id", function(req, res){
	Taqueria.findById(req.params.id).populate("comments").exec(function(err, taqueriaRecord) {
		if(err) {
			console.log(err)
		} else {
			console.log(taqueriaRecord);
			res.render("taquerias/show", {taqueria: taqueriaRecord});
		}
	});	
});


// EDIT Taqueria
router.get("/taquerias/:id/edit", middleware.checkOwnership, function(req, res){
	Taqueria.findById(req.params.id, function(err, taqueriaRecord){
		res.render("taquerias/edit", {taqueria: taqueriaRecord});
	});
});


// UPDATE
router.put("/taquerias/:id/", middleware.checkOwnership, function(req, res){
	req.body.taqueria.bikeparking = req.body.taqueria.bikeparking || false;
	req.body.taqueria.barter = req.body.taqueria.barter || false;
	req.body.taqueria.salsabar = req.body.taqueria.salsabar || false;

	Taqueria.findByIdAndUpdate(req.params.id, req.body.taqueria, function(err, updatedTaqueria){
			if(err) {
				res.redirect("/taquerias");
			} else {
				console.log(updatedTaqueria);
				res.redirect("/taquerias/" + req.params.id);
			}
	})
});

// DESTROY
router.delete("/taquerias/:id", middleware.checkOwnership, function(req, res){
	Taqueria.findByIdAndRemove(req.params.id, function(err){
		if (err) {
			console.log(err);
		} else {
			req.flash("success", "Taqueria post deleted.")
			res.redirect("/taquerias");
		}
	});
})


module.exports = router;