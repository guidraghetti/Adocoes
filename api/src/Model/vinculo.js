var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var vinculoSchema = new Schema({
	_id : ObjectId,
	ativo: Boolean,
	//Relacionamentos com outros Schemas:
	// ...
});
var Vinculo = mongoose.model('Vinculo', vinculoSchema);