import mongoose from 'mongoose'

var Schema = mongoose.Schema

var visSchema = new Schema({
	idInteressado: String,
	idMenor: String,
	timestamp: Date
})

var Visualizacao = module.exports = mongoose.model('Visualizacao', visSchema)