var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var paginaSchema = new Schema({
	_id : ObjectId
});
var Pagina = mongoose.model('Pagina', paginaSchema);