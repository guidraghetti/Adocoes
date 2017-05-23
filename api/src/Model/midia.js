var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId;


var MidiaSchema = new Schema({
	_id: ObjectId,
	conteudo: BinData,
	ativo: Boolean
	
})
var MidiaSchema = mongoose.model('Midia', midiaSchema);