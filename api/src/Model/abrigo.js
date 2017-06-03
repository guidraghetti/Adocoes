const mongoose = require('mongoose')
const Schema = mongoose.Schema

const enderecoSchema = require('./endereco.js')

const abrigoSchema = new Schema({
	nome: {
		type: String,
		required: true
	},
	refRede: {
		type:  mongoose.Schema.Types.ObjectId,
		ref: 'redes'
	},
	endereco: {
		type: enderecoSchema,
		required: true
	},
	ativo: {
		type: Boolean,
		required: true,
		default: true
	}
})

mongoose.model('Abrigo', abrigoSchema)
