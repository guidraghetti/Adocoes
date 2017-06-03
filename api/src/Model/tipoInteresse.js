const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const tipoInteresseSchema = new Schema({
	_id : ObjectId,
	nome: String
	//Relacionamentos com outros Schemas:
	// ...
});
const tipoInteresse = mongoose.model('tipoInteresse', tipoInteresseSchema);