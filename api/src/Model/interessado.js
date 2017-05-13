var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId;

var interessadoSchema = new Schema({
<<<<<<< 031c645cd1a3651a5ea366c559994b65dbe29fd8
	_id : ObjectId,
	nomeConjuge: String,
	dataNascimento: Date,
	renda: Number,
	ativo: Boolean
	//Relacionamentos com outros Schemas:
	// ...
});
=======
	name: String
})
>>>>>>> update

mongoose.model('interessado', interessadoSchema)