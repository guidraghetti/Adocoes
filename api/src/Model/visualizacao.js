const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


const visualizacaoSchema = new Schema({
	_id : ObjectId,
	//necessário instanciar timesStamps:
	// timestampInicio: 
	// timestampFim:
	//Relacionamentos com outros Schemas:
	// ...
});
const Visualizacao = mongoose.model('Visualizacao', visualizacaoSchema);