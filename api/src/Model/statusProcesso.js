var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var statusProcessoSchema = new Schema({
	_id : ObjectId,
	nome: String,
});
var statusProcesso = mongoose.model('statusProcesso', statusProcessoSchema);