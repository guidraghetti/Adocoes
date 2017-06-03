const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const perfilSchema = new Schema({
	_id : ObjectId,
	nome: String,
	//Relacionamentos com outros Schemas:
	// ...
});
const Perfil = mongoose.model('Perfil', perfilSchema);