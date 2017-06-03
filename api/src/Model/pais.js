const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const paisSchema = new Schema({
	_id : ObjectId,
	nome: String,
	nacionalidade: String
	// ...
});
const Pais = mongoose.model('Pais', paisSchema);