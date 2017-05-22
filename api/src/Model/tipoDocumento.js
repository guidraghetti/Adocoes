var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId;

var tipoDocumentoSchema = new Schema({
	_id: ObjectId,
	nome: String
});
var TipoDocumento = mongoose.model('TipoDocumento', tipoDocumentoSchema);