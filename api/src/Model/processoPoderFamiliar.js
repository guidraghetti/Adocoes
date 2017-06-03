var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var processoPoderFamiliarSchema = new Schema({
	_id : ObjectId,
	numero: String,
	ativo: Boolean,
	//Relacionamentos com outros Schemas:
	// ...
});
var ProcessoPoderFamiliar = mongoose.model('ProcessoPoderFamiliar', processoPoderFamiliarSchema);