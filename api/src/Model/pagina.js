const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const paginaSchema = new Schema({
	_id : ObjectId
});
const Pagina = mongoose.model('Pagina', paginaSchema);