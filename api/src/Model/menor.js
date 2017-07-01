const mongoose = require('mongoose')
const Schema = mongoose.Schema

const familiarSchema = require('./familiar.js')
const vinculoSchema = require('./vinculo.js')
const processoSchema = require('./processo.js')
const midiaSchema = require('./midia.js')

const menorSchema = new Schema({
	nome: {
		type: String,
		required: true
	},
	sexo: {
		type: String,
		enum: [ 'Feminino', 'Masculino' ],
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
		type: mongoose.Schema.Types.ObjectId,
		ref: 'etnias'
	},
	familiares: [
		familiarSchema
	],
	menoresVinculados: [
		vinculoSchema
	],
	adocoesConjuntas: [{
		type: mongoose.Schema.Types.ObjectId,
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
		type: mongoose.Schema.Types.ObjectId,
		ref: 'cidades'
	},
	refAbrigo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'abrigos'
	},
	processoPoderFamiliar: {
		type: processoSchema
	},
	interesses: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'interesses'
	}],
	midias: [
		midiaSchema
	],
	visualizacoes: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'visualizacoes'
	}],
	ativo: {
		type: Boolean,
		required: true,
		default: true
	}
}, { collection: 'menores' })

mongoose.model('Menor', menorSchema)
