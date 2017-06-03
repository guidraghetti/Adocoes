const mongoose = require('mongoose')
const Schema = mongoose.Schema

export const enderecoSchema = new Schema({
	logradouro: {
		type: String,
		required: true
	},
	numero: {
		type: String,
		required: true
	},
	complemento: {
		type: String
	},
	bairro: {
		type: String
	},
	cep: {
		type: String
	},
	refCidade: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'cidades',
		required: true
	}
})

mongoose.model('Endereco', enderecoSchema)
