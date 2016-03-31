var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nomineeSchema = new Schema({
    firstName: { type: String },
	lastName: { type: String },
	rank: { type: Number }
});

module.exports = mongoose.model('Nominee', nomineeSchema);