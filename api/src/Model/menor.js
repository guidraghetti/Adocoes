var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProcessoPoderFamiliarEstadoSchema = mongoose.Schema({
	_id: ObjectId,
	nome: String
})

var ProcessoPoderFamiliarSchema = mongoose.Schema({
	_id: ObjectId,
	numero: String,
	refEstado: ObjectId,
	descricaoEstado: String,
	timestampEstado: Timestamp,
	ativo: Boolean
})

var RacaSchema = mongoose.Schema({
	_id: ObjectId,
	nome: String
})

var MenorSchema = mongoose.Schema({
	_id: ObjectId,
	nome: String,
	sexo: String,
	dataNascimento: Date,
	refRaca: { type: Schema.ObjectId, ref: 'racas' },
	guiaAcolhimento: String,
	certidaoNascimento: String,
	saudavel: Boolean,
	descricaoSaude: String,
	curavel: Boolean,
	deficienciaFisica: Boolean,
	deficienciaMental: Boolean,
	adocaoConjunta: Boolean,
	processoPoderFamiliar: ProcessoPoderFamiliarSchema,
	parentescos: [ParentescoSchema],
	interessados: [{ type: Schema.ObjectId, ref: 'interessados' }],
	ativo: Boolean
})

mongoose.model('Menor', menorSchema)