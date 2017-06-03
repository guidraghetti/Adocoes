const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const parentescoSchema = new Schema({
	_id: ObjectId,
	parentesco: String
})

mongoose.model('Parentesco', parentescoSchema)
