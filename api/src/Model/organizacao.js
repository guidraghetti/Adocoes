var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var organizacaoSchema = new Schema({
	_id : ObjectId,
	nome: String,
	ativo: Boolean,
	//Relacionamentos com outros Schemas:
	// ...
});
var Organizacao = mongoose.model('Organizacao', organizacaoSchema);