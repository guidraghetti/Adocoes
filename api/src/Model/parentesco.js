var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var parentescoSchema = new Schema({
	_id : ObjectId,
	//Relacionamentos com outros Schemas:
	// ...
});
var Parentesco = mongoose.model('Parentesco', parentescoSchema);