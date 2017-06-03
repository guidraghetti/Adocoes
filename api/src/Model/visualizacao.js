var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;


var visualizacaoSchema = new Schema({
	_id : ObjectId,
	//necessário instanciar timesStamps:
	// timestampInicio: 
	// timestampFim:
	//Relacionamentos com outros Schemas:
	// ...
});
var Visualizacao = mongoose.model('Visualizacao', visualizacaoSchema);