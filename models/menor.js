import mongoose from 'mongoose'

var menorSchema = mongoose.Schema({
	nome: String,
	data_nascimento: String,
	sexo: String,
	referencias_familiares: [
		{
			tipo: String,
			nome: String 
		},
	],
	nacionalidade: String,
	naturalidade: {
		cidade: String,
		uf: String
	},
	localizacao: {
		cidade: String,
		uf: String,
		dongo: {
			id: Number,
			nome: String
		}
	}
})

var Menor = module.exports = mongoose.model('menores', menorSchema)