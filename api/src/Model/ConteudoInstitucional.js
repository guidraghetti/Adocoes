const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const Timestamp = Schema.Types.Timestamp

const conteudoInstitucionalSchema = new Schema({
	_id: ObjectId,
	nome: String,
	ativo: Boolean,
	//necessário instanciar timesStamps:
	timestampCriacao: timestampSchema,
	timestampInicio: timestampSchema,
	timestampFim: timestampSchema
})

mongoose.model('ConteudoInstitucional', conteudoInstitucionalSchema)
