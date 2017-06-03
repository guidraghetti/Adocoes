const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const tipoDocumentoSchema = new Schema({
	_id: ObjectId,
	nome: String
});
const TipoDocumento = mongoose.model('TipoDocumento', tipoDocumentoSchema);