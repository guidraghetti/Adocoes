const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const cartaSchema = new Schema({
	_id : ObjectId
});
const Carta = mongoose.model('Carta', cartaSchema);