var mongoose = require("mongoose");

var taqueriaSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	address: String,
	bikeparking: Boolean,
	barter: Boolean,
	salsabar: Boolean,
	price: String,
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	]
});

module.exports = mongoose.model("Taqueria", taqueriaSchema);
