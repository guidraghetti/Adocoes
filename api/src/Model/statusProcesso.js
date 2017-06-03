const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


const statusProcessoSchema = new Schema({
	_id: ObjectId,
	nome: String
	
})
const StatusProcessoSchema = mongoose.model('StatusProcesso', statusProcessoSchema);