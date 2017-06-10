const mongoose = require('mongoose')
const Schema = mongoose.Schema

const base64Schema = require('./base64.js')

const conteudoSchema = new Schema({
	nome: {
		type: String,
		required: true
	},
	pagina: {
		type: base64Schema,
		required: true
	},
	midia: [
		base64Schema
	],
	timestampCriacao: {
		type: Date,
		required: true
	},
	timestampInicio: {
		type: Date
	},
	timestampFim: {
		type: Date
	},
	ativo: {
		type: Boolean,
		required: true,
		default: true
	}
})

mongoose.model('Conteudo', conteudoSchema)
