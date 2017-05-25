var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var redeSchema = new Schema({
	_id : ObjectId,
	nome: String,
	ativo: Boolean,
	//Relacionamentos com outros Schemas:
	// ...
});
var Rede = mongoose.model('Rede', redeSchema);