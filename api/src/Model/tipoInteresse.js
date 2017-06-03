var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var tipoInteresseSchema = new Schema({
	_id : ObjectId,
	nome: String
	//Relacionamentos com outros Schemas:
	// ...
});
var tipoInteresse = mongoose.model('tipoInteresse', tipoInteresseSchema);