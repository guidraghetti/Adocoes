const mongoose = require('mongoose')
const Schema = mongoose.Schema

export const base64Schema = new Schema({
	type: {
		
	}		type: String,
		enum: [ 'rg', 'carteira de motorista' ],
		required: true

	conteudo: {
		type: String,
		required: true
	}
})

mongoose.model('Base64', base64Schema)
