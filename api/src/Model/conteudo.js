const mongoose = require('mongoose')
const Schema = mongoose.Schema

const midiaSchema = require('./midia')

const conteudoSchema = new Schema({
	nome: {
		type: String,
		required: true
	},
	pagina: {
		type: midiaSchema,
		required: true
	},
	midia: [
		midiaSchema
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
