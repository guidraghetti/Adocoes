const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const enderecoSchema = new Schema({
	_id : ObjectId,
	logradouro: String,
	numero: String,
	complemento: String,
	bairro: String,
	cep: String,
	refCidade: { type: ObjectId, ref: 'cidades' }
})

mongoose.model('Endereco', enderecoSchema);