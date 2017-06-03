var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

const processoPoderFamiliarSchema = new Schema({
	_id: ObjectId,
	numero: String,
	refEstado: ObjectId,
	descricaoEstado: String,
	// timestampEstado: Timestamp,
	ativo: Boolean
})

mongoose.model('ProcessoPoderFamiliar', processoPoderFamiliarSchema)
