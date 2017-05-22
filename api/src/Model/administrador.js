var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var administradorSchema = new Schema({
	_id : ObjectId,
	matricula: String,
	ativo: Boolean,
	//Relacionamentos com outros Schemas:
	// ...
});
var Administrador = mongoose.model('Administrador', administradorSchema);