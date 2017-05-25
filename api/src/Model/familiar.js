var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var familiarSchema = new Schema({
	_id : ObjectId,
	nome: String,
	ativo: Boolean
});
var Familiar = mongoose.model('Familiar', familiarSchema);