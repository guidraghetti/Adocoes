const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const abrigoSchema = new Schema({
	_id : ObjectId,
	nome: String,
	ativo: Boolean,
	refEndereco: Endereco,
	refRede: { type: Schema.ObjectId, ref: 'redes' }
})

mongoose.model('Abrigo', abrigoSchema);