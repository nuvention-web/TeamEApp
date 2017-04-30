var mongoose = require('mongoose');
var ProgramSchema = new mongoose.Schema({
	program: String,
	location: String,
	times : [{String : String}],
	classes: [String],
	school: [String],
	commitment: String,
	link: String,
	contact: String,
	subjects: [String]
});

module.exports = mongoose.model('Program', ProgramSchema);

