const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cidadeSchema = Schema({
	_id: ObjectId,
	nome: String,
	refEstado: { type: Schema.ObjectId, ref: 'estados' }
});

mongoose.model('Cidade', cidadeSchema);

const estadoSchema = Schema({
	_id: ObjectId,
	sigla: String,
	nome: String
});

mongoose.model('Estado', estadoSchema);
