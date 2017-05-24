var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var conteudoInstitucionalSchema = new Schema({
	_id: ObjectId,
	nome: String,
	ativo: Boolean,
	//necessário instanciar timesStamps:
	timestampCriacao: 
	timestampInicio: 
	timestampFim: 
});
var ConteudoInstitucional = mongoose.model('ConteudoInstitucional', conteudoInstitucionalSchema);