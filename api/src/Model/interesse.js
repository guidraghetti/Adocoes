const mongoose = require('mongoose')
const Schema = mongoose.Schema

const interesseSchema = new Schema({
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
	tipoInteresse: {
		type: String,
		enum: [ 'favoritar', 'apadrinhar', 'adotar'],
		required: true
	},
	timeStamp: {
		type: Date,
		required: true
	}
})

const interesse = mongoose.model('interesse', interesseSchema)
