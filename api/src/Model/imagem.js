const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const imagemSchema = new Schema({
	_id : ObjectId
});
const Imagem = mongoose.model('Imagem', imagemSchema);