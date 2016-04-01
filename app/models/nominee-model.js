var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nomineeSchema = new Schema({
    nomineeID: { type: Number },
    firstName: { type: String },
	lastName: { type: String },
	rank: { type: Number },
    voterName: { type: String },
});

module.exports = mongoose.model('Nominee', nomineeSchema);