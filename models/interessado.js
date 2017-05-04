import mongoose from 'mongoose'

var Schema = mongoose.Schema

var interSchema = new Schema({
	idRef: String,
	name: String
})

var Interessado = module.exports = mongoose.model('Interessado', interSchema)

module.exports.create = (newInter, callback) => {
	newInter.save(callback)
}