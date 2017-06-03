const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const organizacaoSchema = new Schema({
	_id : ObjectId,
	nome: String,
	ativo: Boolean,
	//Relacionamentos com outros Schemas:
	// ...
});
const Organizacao = mongoose.model('Organizacao', organizacaoSchema);