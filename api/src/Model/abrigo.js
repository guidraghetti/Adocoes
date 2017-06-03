var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var abrigoSchema = new Schema({
	_id : ObjectId,
	nome: String,
	ativo: Boolean,
	//Relacionamentos com outros Schemas:
	// ...
});
var Abrigo = mongoose.model('Abrigo', abrigoSchema);