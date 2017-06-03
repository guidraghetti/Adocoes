const mongoose = require('mongoose')
const Schema = mongoose.Schema

export const base64Schema = new Schema({
	conteudo: {
		type: String,
		required: true
	}
})

mongoose.model('Base64', base64Schema)
