const mongoose = require('mongoose')
const Schema = mongoose.Schema

export const midiaSchema = new Schema({
	type: {
		type: String,
    enum: [ 'foto', 'video', 'carta', 'html' ],
		required: true
	},
	conteudo: {
		type: String,
		required: true
	}
})

mongoose.model('Midia', midiaSchema)