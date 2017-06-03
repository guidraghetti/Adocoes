var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var imagemSchema = new Schema({
	_id : ObjectId
});
var Imagem = mongoose.model('Imagem', imagemSchema);