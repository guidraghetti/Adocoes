var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId;

var interessadoSchema = new Schema({
	_id : ObjectId,
	nomeConjuge: String,
	dataNascimento: Date,
	renda: Number,
	ativo: Boolean
	//Relacionamentos com outros Schemas:
	// ...
});

var Interessado = mongoose.model('Interessado', interessadoSchema);