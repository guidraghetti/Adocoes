var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var usuarioSchema = new Schema({
	_id : ObjectId,
	nome: String,
	email: String,
	senha: String,
	ativo: Boolean,
	//Relacionamentos com outros Schemas:
	// ...
});
var Usuario = mongoose.model('Usuario', usuarioSchema);