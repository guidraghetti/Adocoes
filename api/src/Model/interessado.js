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
		numero: {
			type: String,
			required: true
		},
		imagem: {
			type: base64Schema
		},
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
		valor: {
			type: Number,
			required: true
		},
		comprovantes: [{
			type: base64Schema
		}]
	},
	outrosDocumentos: [{
		numero: {
			type: String,
			required: true
		},
		dataEmissao: {
			type: Date
		},
		orgaoEmissor: {
			type: String
		},
		tipoDocumento: {
			type: String,
			enum: [ 'rg', 'carteira de motorista' ],
			required: true
		},
		imagem: {
			type: base64Schema
		}
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

mongoose.model('interessado', interessadoSchema)
