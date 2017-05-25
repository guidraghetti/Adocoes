var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var midiaSchema = new Schema({
	_id : ObjectId,
	ativo: Boolean, 
	//Relacionamentos com outros Schemas:
	contudo: 
});
var Midia = mongoose.model('Midia', midiaSchema);