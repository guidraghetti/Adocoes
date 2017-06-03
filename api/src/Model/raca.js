const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const racaSchema = new Schema({
	_id: ObjectId,
	nome: String
})

mongoose.model('Raca', racaSchema)
