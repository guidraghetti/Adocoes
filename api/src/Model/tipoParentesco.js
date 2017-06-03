const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const tipoParentescoSchema = new Schema({
	_id : ObjectId,
	nome: String,
	//Relacionamentos com outros Schemas:
	// ...
});
const TipoParentesco = mongoose.model('TipoParentesco', tipoParentescoSchema);