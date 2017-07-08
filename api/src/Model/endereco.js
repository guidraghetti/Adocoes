const mongoose = require('mongoose')
const Schema = mongoose.Schema

export const enderecoSchema = new Schema({
	logradouro: {
		type: String,
		required: true
	},
	numero: {
		type: Number,
		required: true
	},
	complemento: {
		type: String
	},
	bairro: {
		type: String
	},
	cep: {
		type: Number
	},
	refCidade: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'cidades',
		required: true
	}
})

mongoose.model('Endereco', enderecoSchema)
