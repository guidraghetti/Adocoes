var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var estadoSchema = new Schema({
	_id : ObjectId,
	nome: String,
	single: String
	//Relacionamentos com outros Schemas:
	// ...
});
var Estado = mongoose.model('Estado', estadoSchema);