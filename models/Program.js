var mongoose = require('mongoose');
var ProgramSchema = new mongoose.Schema({
	program: String,
	location: String,
	days : [String],
	hours: [String],
	classes: [String],
	commitment: String,
	link: String,
	contact: String
});

module.exports = mongoose.model('Program', ProgramSchema);

