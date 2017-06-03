const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const base64Schema = new Schema({
	_id: ObjectId,
	conteudo: String
})

mongoose.model('Base64', base64Schema)
