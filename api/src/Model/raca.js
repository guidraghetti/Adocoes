var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var racaSchema = new Schema({
	_id: ObjectId,
	nome: String
});
var Raca = mongoose.model('Raca', racaSchema);