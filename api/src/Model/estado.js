const mongoose = require('mongoose')
const Schema = mongoose.Schema

const estadoSchema = Schema({
	sigla: {
		type: String,
		required: true,
		unique: true
	},
	nome: {
		type: String,
		required: true
	}
})

mongoose.model('Estado', estadoSchema)
