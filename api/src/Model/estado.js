var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

const estadoSchema = Schema({
	_id: ObjectId,
	sigla: String,
	nome: String
})

mongoose.model('Estado', estadoSchema)
