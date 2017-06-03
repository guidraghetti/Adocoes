<<<<<<< HEAD
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var processoPoderFamiliarSchema = new Schema({
	_id : ObjectId,
	numero: String,
	ativo: Boolean,
	//Relacionamentos com outros Schemas:
	// ...
});
var ProcessoPoderFamiliar = mongoose.model('ProcessoPoderFamiliar', processoPoderFamiliarSchema);
=======
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId;


var ProcessoPoderFamiliarSchema = new Schema({
	_id: ObjectId,
	numero: String,
	ativo: Boolean
})
var ProcessoPoderFamiliarSchema = mongoose.model('ProcessoPoderFamiliar', processoPoderFamiliarSchema);
>>>>>>> adding models, still necessary the relation with schemas
