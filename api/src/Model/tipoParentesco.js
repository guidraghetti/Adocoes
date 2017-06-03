var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var tipoParentescoSchema = new Schema({
	_id : ObjectId,
	nome: String,
	//Relacionamentos com outros Schemas:
	// ...
});
var TipoParentesco = mongoose.model('TipoParentesco', tipoParentescoSchema);