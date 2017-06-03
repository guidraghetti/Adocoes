const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const familiarSchema = require('./familiar.js')
const vinculoSchema = require('./vinculo.js')
const processoPoderFamiliarSchema = require('./processoPoderFamiliar.js')

const menorSchema = new Schema({
	_id: ObjectId,
	nome: String,
	sexo: String,
	certidaoNascimento: String,
	dataNascimento: Date,
	familiares: [ familiarSchema ],
	menoresVinculados: [ vinculoSchema ],
	refRaca: { type: ObjectId, ref: 'racas' },
	saudavel: Boolean,
	descricaoSaude: String,
	curavel: Boolean,
	deficienciaFisica: Boolean,
	deficienciaMental: Boolean,
	guiaAcolhimento: String,
	refCidade: { type: ObjectId, ref: 'cidades' },
	refAbrigo: { type: ObjectId, ref: 'abrigos' },
	processoPoderFamiliar: processoPoderFamiliarSchema,
	interessados: [{ type: ObjectId, ref: 'interessados' }],
	ativo: Boolean
})

mongoose.model('Menor', menorSchema)
