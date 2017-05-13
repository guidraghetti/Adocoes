var mongoose = require('mongoose')
var Schema = mongoose.Schema

var interessadoSchema = new Schema({
	name: String
})

mongoose.model('interessado', interessadoSchema)