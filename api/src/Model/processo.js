const mongoose = require('mongoose')
const Schema = mongoose.Schema

const processoSchema = new Schema({
	numero: {
		type: String,
		required: true
	},
	estadoProcesso: {
		type: String,
		enum: [ 'em tramitação', 'transitado em julgado' ]
	},
	timestampEstado: {
		type: Date
	}
})

mongoose.model('Processo', processoSchema)
