var mongoose = require("mongoose");
var Taquerias = require("./models/taquerias");
var Comment = require("./models/comment");

var data = [
	{
		name: "Tacos Inc", 
		image: "http://s3-media3.fl.yelpcdn.com/bphoto/EcKI9qyzsBv8pQtX8YUBcg/o.jpg", 
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sem ut odio tincidunt interdum a a diam. Aenean et velit ac purus commodo lacinia. Vivamus ultrices lorem nec turpis placerat luctus. Vestibulum luctus eros eget turpis dapibus sagittis. Vestibulum quis sapien et leo congue maximus sit amet ac lectus. Duis enim nisl, tempor non consectetur quis, malesuada eu elit. Nunc eget dui ut orci egestas auctor nec vitae lacus. Nunc sollicitudin faucibus tellus posuere placerat. Mauris vehicula eu leo at hendrerit. Donec tempor tristique libero malesuada maximus. Etiam sodales sit amet tortor quis hendrerit. Cras id hendrerit tellus. Etiam augue nisl, semper nec risus lacinia, pretium porttitor metus."
	},
	{
		name: "Los Gorditos", 
		image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tacos.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sem ut odio tincidunt interdum a a diam. Aenean et velit ac purus commodo lacinia. Vivamus ultrices lorem nec turpis placerat luctus. Vestibulum luctus eros eget turpis dapibus sagittis. Vestibulum quis sapien et leo congue maximus sit amet ac lectus. Duis enim nisl, tempor non consectetur quis, malesuada eu elit. Nunc eget dui ut orci egestas auctor nec vitae lacus. Nunc sollicitudin faucibus tellus posuere placerat. Mauris vehicula eu leo at hendrerit. Donec tempor tristique libero malesuada maximus. Etiam sodales sit amet tortor quis hendrerit. Cras id hendrerit tellus. Etiam augue nisl, semper nec risus lacinia, pretium porttitor metus."
	},
	{
		name: "Los Taquitos", 
		image: "http://newyork.seriouseats.com/images/20111017-tacos-ricos.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sem ut odio tincidunt interdum a a diam. Aenean et velit ac purus commodo lacinia. Vivamus ultrices lorem nec turpis placerat luctus. Vestibulum luctus eros eget turpis dapibus sagittis. Vestibulum quis sapien et leo congue maximus sit amet ac lectus. Duis enim nisl, tempor non consectetur quis, malesuada eu elit. Nunc eget dui ut orci egestas auctor nec vitae lacus. Nunc sollicitudin faucibus tellus posuere placerat. Mauris vehicula eu leo at hendrerit. Donec tempor tristique libero malesuada maximus. Etiam sodales sit amet tortor quis hendrerit. Cras id hendrerit tellus. Etiam augue nisl, semper nec risus lacinia, pretium porttitor metus."
	},

];


function seedDB() {

	// remove taquerias
	Taquerias.remove({}, function(err) {
		// if (err) {
		// 	console.log(err);
		// } else {
		// 	console.log("removed taquerias.");
		// };

		// data.forEach(function(seed){
		// 	Taquerias.create(seed, function(err, taqueria){
		// 		if(err) {
		// 			console.log(err);
		// 		} else {
		// 			console.log("added taqueria..");
		// 			Comment.create(
		// 				{
		// 					text: "This place is great, but dirty",
		// 					author: "Greg"
		// 				}, function(err, comment){
		// 					if (err) {
		// 						console.log(err);
		// 					} else {
		// 						taqueria.comments.push(comment);
		// 						taqueria.save();
		// 						console.log("created comment new");
		// 					}

		// 				});
		// 		}
		// 	});
		// });
	});
};


module.exports = seedDB;