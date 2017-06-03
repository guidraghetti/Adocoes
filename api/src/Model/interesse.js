const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


const interesseSchema = new Schema({
	
	idInteressado: String,
	idMenor: String,
	timeStamp: Date
	
})
const interesse = mongoose.model('interesse', interesseSchema);