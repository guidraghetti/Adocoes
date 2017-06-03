const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const vinculoSchema = new Schema({
	_id: ObjectId,
	refMenor: { type: ObjectId, ref: 'menores' },
	refTipoVinculo: { type: ObjectId, ref: 'tiposVinculo' },
	adocaoConjunta: Boolean,
	ativo: Boolean
})

mongoose.model('Vinculo', vinculoSchema)
