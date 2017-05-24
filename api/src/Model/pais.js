var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var paisSchema = new Schema({
	_id : ObjectId,
	nome: String,
	nacionalidade: String
	// ...
});
var Pais = mongoose.model('Pais', paisSchema);