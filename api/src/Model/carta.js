var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var cartaSchema = new Schema({
	_id : ObjectId
});
var Carta = mongoose.model('Carta', cartaSchema);