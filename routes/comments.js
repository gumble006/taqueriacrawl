var express 	= require('express');
var router 		= express.Router();
var Taqueria 	= require('../models/taquerias');
var Comment 	= require('../models/comment');
var middleware 	= require('../middleware');

// new comment
router.get("/taquerias/:id/comments/new", middleware.isLoggedIn, function(req,res){
	Taqueria.findById(req.params.id, function(err, taqueria){
		if(err) {
			console.log(err)
		} else {
			res.render("comments/new", {taqueria: taqueria});
		}
	})
})

// create comment
router.post("/taquerias/:id/comments", middleware.isLoggedIn, function(req, res){
	Taqueria.findById(req.params.id, function(err, taqueria){
		if(err) {
			console.log(err);
			redirect("/taquerias")
		} else {
			Comment.create(req.body.comment, function(err, comment){
				if(err) {
					req.flash("error", "Error adding comment.")
					console.log(err);
				} else {
					comment.author.id = req.user._id;
					comment.author.username = req.user.username;
					comment.save();
					taqueria.comments.push(comment);
					taqueria.save();
					req.flash("success", "New comment added.")
					res.redirect("/taquerias/" + taqueria._id)
				}
			})
		}
	});
});


// EDIT COMMENT
router.get("/taquerias/:id/comments/:comment_id/edit", middleware.checkCommentOwnership, function(req, res) {
	Comment.findById(req.params.comment_id, function(err, commentRecord){
		if(err) {
			res.redirect("back");
		} else {
			res.render("comments/edit", {taqueria_id: req.params.id, comment: commentRecord});
		}
	});
});

// COMMENT UPDATE
router.put("/taquerias/:id/comments/:comment_id", function(req, res){
	Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
		if(err) {
			console.log(err);
		} else {
			res.redirect("/taquerias/" + req.params.id);
		}
	});
});


// Destroy

router.delete("/taquerias/:id/comments/:comment_id", middleware.checkCommentOwnership, function(req, res){
	Comment.findByIdAndRemove(req.params.comment_id, function(err){
		if(err){
			res.redirect("back");
		} else {
			req.flash("success", "Comment deleted.")
			res.redirect("/taquerias/" + req.params.id);
		}
	})
});

module.exports = router;