var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var enderecoSchema = new Schema({
	_id : ObjectId,
	logradouro: String,
	numero: String,
	complemento: String,
	bairro: String,
	cep: String,
	ativo: Boolean
	//Relacionamentos com outros Schemas:
	// ...
});
var Endereco = mongoose.model('Endereco', enderecoSchema);