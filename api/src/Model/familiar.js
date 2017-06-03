const mongoose = require('mongoose')
const Schema = mongoose.Schema

const familiarSchema = new Schema({
	nome: {
		type: String,
		required: true
	},
	parentesco: {
		type: String,
		enum: [ 'pai', 'mãe', 'irmão', 'irmã', 'tio', 'tia', 'primo', 'prima', 'avô', 'avó', 'tio-avô', 'tia-avó', 'bisavô', 'bisavó', 'filho', 'filha' ],
		required: true
	}
})

mongoose.model('Familiar', familiarSchema)
