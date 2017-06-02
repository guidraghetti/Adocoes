var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId;


var RacaSchema = new Schema({
	_id: ObjectId,
	nome: String
	
})
var RacaSchema = mongoose.model('Raca', racaSchema);