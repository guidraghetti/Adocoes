var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId;


var StatusProcessoSchema = new Schema({
	_id: ObjectId,
	nome: String
	
})
var StatusProcessoSchema = mongoose.model('StatusProcesso', statusProcessoSchema);