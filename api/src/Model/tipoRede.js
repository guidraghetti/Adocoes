var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var tipoRedeSchema = new Schema({
	_id : ObjectId,
	nome: String,
	//Relacionamentos com outros Schemas:
	// ...
});
var TipoRede = mongoose.model('TipoRede', tipoRedeSchema);