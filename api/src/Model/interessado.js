const mongoose = require('mongoose')
const Schema = mongoose.Schema

const enderecoSchema = require('./endereco.js')
const telefoneSchema = require('./telefone.js')

const interessadoSchema = new Schema({
	refUsuario: {
		type: ObjectId,
		ref: 'usuarios'
	},
	name: {
		type: String
	},
	cpf: {
		required: true
	}
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
	comprovantesRenda: [{
		type: base64Schema
	}],
	outrosDocumentos: [{
		type: documentoSchema
	}],
	enderecos: [{
		type: enderecoSchema
	}],
	telefones: [{
		type: telefoneSchema
	}],
	interesses: [{
		type: ObjectId,
		ref: 'interesses'
	}],
	visualizacoes: [{
		type: ObjectId,
		ref: 'visualizacoes'
	}],
	ativo: {
		type: Boolean,
		required: true,
		default: true
	}
})

mongoose.model('Interessado', interessadoSchema)
