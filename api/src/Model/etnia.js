const mongoose = require('mongoose')
const Schema = mongoose.Schema

const etniaSchema = new Schema({
	nome: {
		type: String,
		required: true
	}
})

mongoose.model('Etnia', etniaSchema)
