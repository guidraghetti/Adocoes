var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UsuarioSchema = mongoose.Schema({

id: ObjectId,
nome: String,
email: String, 
senha: String,
ativo: boolean

})

