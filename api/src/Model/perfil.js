var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var perfilSchema = new Schema({
	_id : ObjectId,
	nome: String,
	//Relacionamentos com outros Schemas:
	// ...
});
var Perfil = mongoose.model('Perfil', perfilSchema);