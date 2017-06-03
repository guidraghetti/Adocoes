const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

// const base64Schema = require('./base64.js').default

export const documentoSchema = new Schema({
	_id: ObjectId,
	dataEmissao: Date,
	ativo: Boolean,
	orgaoEmissor: String,
	// imagem: base64Schema,
	refTipoDocument: { type: ObjectId, ref: 'tiposDocumentos' }
})

mongoose.model('Documento', documentoSchema)
