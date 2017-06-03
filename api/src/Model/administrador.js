const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


const administradorSchema = new Schema({
	_id: ObjectId,
	matricula: String,
	ativo: Boolean
	
})
const Administrador = mongoose.model('Administrador', administradorSchema);