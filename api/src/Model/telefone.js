const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export default const telefoneSchema = new Schema({
	_id: ObjectId,	
	ddd: Number,
	numero: Number,
	ativo: Boolean
})

mongoose.model('Telefone', telefoneSchema)
