var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId;


var statusProcessoSchema = new Schema({
	_id: ObjectId,
	nome: String
	
})
var StatusProcessoSchema = mongoose.model('StatusProcesso', statusProcessoSchema);