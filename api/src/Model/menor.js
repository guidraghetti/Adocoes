const mongoose = require('mongoose')
const Schema = mongoose.Schema

const familiarSchema = require('./familiar.js')
const vinculoSchema = require('./vinculo.js')
const processoPoderFamiliarSchema = require('./processoPoderFamiliar.js')

const menorSchema = new Schema({
	nome: {
		type: String,
		required: true
	},
	sexo: {
		type: String,
		enum[ 'Feminino', 'Masculino' ],
		required: true
	},
	certidaoNascimento: {
		type: String
	},
	dataNascimento: {
		type: Date,
		required: true
	},
	refEtnia: {
		type: ObjectId,
		ref: 'etnias'
	},
	familiares: [{
		type: familiarSchema
	}],
	menoresVinculados: [{
		type: vinculoSchema
	}],
	adocoesConjuntas: [{
		type: ObjectId,
		ref: 'menores'
	}],
	saudavel: {
		type: Boolean,
		required: true
	},
	descricaoSaude: {
		type: String
	},
	curavel: {
		type: Boolean
	},
	deficienciaFisica: {
		type: Boolean
	},
	deficienciaMental: {
		type: Boolean
	},
	guiaAcolhimento: {
		type: String
	},
	refCidade: {
		type: ObjectId,
		ref: 'cidades'
	},
	refAbrigo: {
		type: ObjectId,
		ref: 'abrigos'
	},
	processoPoderFamiliar: {
		type: Schema.processoPoderFamiliarSchema
	},
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

mongoose.model('Menor', menorSchema)
