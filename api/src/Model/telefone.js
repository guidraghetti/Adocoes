var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId;

var telefoneSchema = new Schema({
	_id: ObjectId,	
	ddd: Number,
	numero: Number,
	ativo: Boolean
});
var Telefone = mongoose.model('Telefone', telefoneSchema);