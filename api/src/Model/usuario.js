const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


const usuarioSchema = mongoose.Schema({
	_id: ObjectId,
	nome: String,
	email: String, 
	senha: String,
	ativo: Boolean
})

const Usuario = mongoose.model('Usuario', usuarioSchema);
