var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var tipoVinculoSchema = new Schema({
	_id : ObjectId,
	nome: String
});
var TipoVinculo = mongoose.model('TipoVinculo', tipoVinculoSchema);