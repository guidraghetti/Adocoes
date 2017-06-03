const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const documentoSchema = require('./documento.js')
const enderecoSchema = require('./endereco.js')
const telefoneSchema = require('./telefone.js')

const interessadoSchema = new Schema({
	_id : ObjectId,
	name: String,
	nomeConjuge: String,
	dataNascimento: Date,
	renda: Number,
	documentos: [ documentoSchema ],
	enderecos: [ enderecoSchema ],
	telefones: [ telefoneSchema ],
	ativo: Boolean
})

mongoose.model('interessado', interessadoSchema)
