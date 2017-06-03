const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const estadoSchema = Schema({
	_id: ObjectId,
	sigla: String,
	nome: String
})

mongoose.model('Estado', estadoSchema)
