var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId;


var RacaSchema = new Schema({
	_id: ObjectId,
	nome: int
	
})
var RacaSchema = mongoose.model('Raca', racaSchema);