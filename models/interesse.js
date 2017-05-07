import mongoose from 'mongoose'

var Schema = mongoose.Schema

var interesseSchema = new Schema({
	idInteressado: String,
	idMenor: String,
	dateInit: Date,
	dateEnd: Date
})

var Interesse = module.exports = mongoose.model('Interesse', interesseSchema)