const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const tipoRedeSchema = new Schema({
	_id : ObjectId,
	nome: String
})

mongoose.model('TipoRede', tipoRedeSchema)
