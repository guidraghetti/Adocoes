const mongoose = require('mongoose')
const Schema = mongoose.Schema

const base64Schema = require('./base64')

const documentoSchema = new Schema({
	numero: {
		type: String,
		required: true
	},
	dataEmissao: {
		type: Date
	},
	orgaoEmissor: {
		type: String
	},
	tipoDocumento: {
		type: String,
		enum: [ 'rg', 'cnh' ],
		required: true
	},
	imagem: {
		type: base64Schema
	}
})

mongoose.model('Documento', documentoSchema)
