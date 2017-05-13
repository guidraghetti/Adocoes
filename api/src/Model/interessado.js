var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;

var interessadoSchema = new Schema({
	idInteressado: String,
	name: String
})

module.exports = mongoose.model('Interessado', interessadoSchema);
