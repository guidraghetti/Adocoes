var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId;


var interesseSchema = new Schema({
	
	idInteressado: String,
	idMenor: String,
	timeStamp: Date
	
})
var interesse = mongoose.model('interesse', interesseSchema);