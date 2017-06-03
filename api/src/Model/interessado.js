const mongoose = require('mongoose')
const Schema = mongoose.Schema

const enderecoSchema = require('./endereco')
const telefoneSchema = require('./telefone')
const base64Schema = require('./base64')
const documentoSchema = require('./documento')

const interessadoSchema = new Schema({
	refUsuario: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'usuarios'
	},
	name: {
		type: String
	},
	cpf: {
		type: documentoSchema,
		required: true
	},
	nomeConjuge: {
		type: String
	},
	email: {
		type: String
	},
	dataNascimento: {
		type: Date,
		required: true
	},
	renda: {
		type: Number,
		required: true
	},
	comprovantesRenda: [
		base64Schema
	],
	outrosDocumentos: [
		documentoSchema
	],
	enderecos: [
		enderecoSchema
	],
	telefones: [
		telefoneSchema
	],
	interesses: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'interesses'
	}],
	visualizacoes: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'visualizacoes'
	}],
	ativo: {
		type: Boolean,
		required: true,
		default: true
	}
})

mongoose.model('Interessado', interessadoSchema)
