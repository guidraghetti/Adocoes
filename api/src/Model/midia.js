const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


const midiaSchema = new Schema({
	
	_id: ObjectId,
	// conteudo: BinData,
	ativo: Boolean
	
})
const MidiaSchema = mongoose.model('Midia', midiaSchema);