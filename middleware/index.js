// middleware
var Taqueria 	  	= require("../models/taquerias.js"),
	Comment 	  	= require("../models/comment"),
 	middleware  = {};


middleware.isLoggedIn = function(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	} 
	req.flash("error", "Please log-in.");
	res.redirect("/login");
};

middleware.checkOwnership = function(req, res, next){
	// logged in?
	if(req.isAuthenticated()) {
		// Find record
		Taqueria.findById(req.params.id, function(err, taqueriaRecord){
			if(err){
				req.flash("error", "Taqueria not found.")
				res.redirect("back");
			} else {
				// is owner of post?
				if(taqueriaRecord.author.id.equals(req.user._id)) {
					next();
				} else {
					req.flash("error", "You do not have permission.")
					res.redirect("back");
				}
			}
			})
		} else {
			req.flash("error", "You need to be logged in.");
			res.redirect("back");
		}
};


middleware.checkCommentOwnership = function(req, res, next){
	// logged in?
		if(req.isAuthenticated()) {
			// Find record
			Comment.findById(req.params.comment_id, function(err, commentRecord){
				if(err){
					res.redirect("back");
				} else {
					// is owner of comment?
					if(commentRecord.author.id.equals(req.user._id)) {
						next();
					} else {
						req.flash("error", "You do not have permission.")
						res.redirect("back");
					}
				}
			})
		} else {
			req.flash("error", "You need to be logged in.")
			res.redirect("back");
		}
};


module.exports = middleware;