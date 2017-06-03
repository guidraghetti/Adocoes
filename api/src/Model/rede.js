const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const redeSchema = new Schema({
	_id : ObjectId,
	nome: String,
	refTipoRede: { type: ObjectId, ref: 'tiposRedes' },
	ativo: Boolean,
})

mongoose.model('Rede', redeSchema);