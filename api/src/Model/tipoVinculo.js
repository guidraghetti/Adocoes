const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const tipoVinculoSchema = new Schema({
	_id: ObjectId,
	tipoVinculo: String
})

mongoose.model('TipoVinculo', tipoVinculoSchema)
