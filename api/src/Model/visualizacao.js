const mongoose = require('mongoose')
const Schema = mongoose.Schema

const visualizacaoSchema = new Schema({
	refInteressado: {
		type: ObjectId,
		ref: 'interessados'
		required: true
	},
	refMenor: {
		type: ObjectId,
		ref: 'menores',
		required: true
	},
	timestampInicio: {
		type: Date,
		required: true
	},
	timestampFim: {
		type: Date,
		required: true
	}
})

mongoose.model('Visualizacao', visualizacaoSchema)
