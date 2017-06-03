const mongoose = require('mongoose')
const Schema = mongoose.Schema

const redeSchema = new Schema({
	nome: {
		type: String,
		required: true,
		unique: true
	},
	refTipoRede: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'tiposRedes'
	},
	ativo: {
		type: Boolean,
		required: true,
		default: true
	}
})

mongoose.model('Rede', redeSchema)
