var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId;

var documentoSchema = new Schema({
	_id: ObjectId,
	dataEmissao: Date,
	ativo: Boolean,
	orgaoEmissor: String,
	//Relacionamentos com outros Schemas:
	// ...
});
var Documento = mongoose.model('Documento', documentoSchema);