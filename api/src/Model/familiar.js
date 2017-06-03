const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const familiarSchema = new Schema({
	_id: ObjectId,
	nome: String,
	refParentesco: { type: ObjectId, ref: 'parentes' }
})

mongoose.model('Familiar', familiarSchema)
