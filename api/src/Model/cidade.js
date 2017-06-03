const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const cidadeSchema = Schema({
	_id: ObjectId,
	nome: String,
	refEstado: { type: Schema.ObjectId, ref: 'estados' }
})

mongoose.model('Cidade', cidadeSchema)
