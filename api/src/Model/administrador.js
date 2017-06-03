var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId;


var AdministradorSchema = new Schema({
	_id: ObjectId,
	matricula: String,
	ativo: Boolean
	
})
var Administrador = mongoose.model('Administrador', administradorSchema);