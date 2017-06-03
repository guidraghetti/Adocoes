var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var cidadeSchema = new Schema({
	_id: ObjectId,
	nome: String
});
var Cidade = mongoose.model('Cidade', cidadeSchema);