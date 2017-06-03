const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menorSchema = Schema({
	_id: ObjectId,
	nome: String,
	sexo: String,
	certidaoNascimento: String,
	dataNascimento: Date,
	familiares: [ FamiliarSchema ],
	menoresVinculados: [ VinculoSchema ],
	refRaca: { type: Schema.ObjectId, ref: 'racas' },
	saudavel: Boolean,
	descricaoSaude: String,
	curavel: Boolean,
	deficienciaFisica: Boolean,
	deficienciaMental: Boolean,
	guiaAcolhimento: String,
	refCidade: { type: Schema.ObjectId, ref: 'cidades' },
	refAbrigo: { type: Schema.ObjectId, ref: 'abrigos' },
	processoPoderFamiliar: ProcessoPoderFamiliarSchema,
	interessados: [{ type: Schema.ObjectId, ref: 'interessados' }],
	ativo: Boolean
});

mongoose.model('Menor', menorSchema);

const familiarSchema = Schema({
	_id: ObjectId,
	nome: String,
	refParentesco: { type: Schema.ObjectId, ref: 'parentes' }
});

mongoose.model('Familiar', familiarSchema);

const ParentescoSchema = Schema({
	_id: ObjectId,
	parentesco: String
});

mongoose.model('Parentesco', parentescoSchema);

const vinculoSchema = Schema({
	_id: ObjectId,
	refMenor: { type: Schema.ObjectId, ref: 'menores' },
	refTipoVinculo: { type: Schema.ObjectId, ref: 'tiposVinculo' },
	adocaoConjunta: Boolean,
	ativo: Boolean
});

mongoose.model('Vinculo', vinculoSchema);

const tipoVinculoSchema = Schema({
	_id: ObjectId,
	tipoVinculo: String
});

mongoose.model('TipoVinculo', tipoVinculoSchema);

const RacaSchema = Schema({
	_id: ObjectId,
	nome: String
});

mongoose.model('Raca', racaSchema);

const ProcessoPoderFamiliarSchema = Schema({
	_id: ObjectId,
	numero: String,
	refEstado: ObjectId,
	descricaoEstado: String,
	timestampEstado: Timestamp,
	ativo: Boolean
});

mongoose.model('ProcessoPoderFamiliar', processoPoderFamiliarSchema);
