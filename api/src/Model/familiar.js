var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId;


var FamiliarSchema = new Schema({
	_id: ObjectId,
	name: String,
	ativo: Boolean
})
var Familiar = mongoose.model('Familiar', familiarSchema);