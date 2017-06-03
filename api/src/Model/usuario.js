var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId;


var usuarioSchema = mongoose.Schema({
	_id: ObjectId,
	nome: String,
	email: String, 
	senha: String,
	ativo: Boolean
})

var Usuario = mongoose.model('Usuario', usuarioSchema);
