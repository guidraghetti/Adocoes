const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vinculoSchema = new Schema({
	refMenor: {
		type: ObjectId,
		ref: 'menores',
		required: true
	},
	tipoVinculo: {
		type: String,
		enum: [ 'irmão', 'irmã', 'primo', 'prima' ],
		required: true
	}
})

mongoose.model('Vinculo', vinculoSchema)
