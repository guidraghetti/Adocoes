var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var interesseSchema = new Schema({
	_id: ObjectId, 
	ativo: Boolean,
	//necessário instanciar timesStamp:
	timeStamp: 
});
var Interesse = mongoose.model('Interesse', interesseSchema);
