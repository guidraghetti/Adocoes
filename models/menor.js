import mongoose from 'mongoose'

var menorSchema = mongoose.Schema({
	name: String,
	gender: String,
	birthDate: Date,
	shelterGuide: String,
	birthCertificate: String,
	familyReferences: [
		{
			type: String,
			name: String 
		},
	],
	nationality: String,
	placeOfBirth: {
		cidade: String,
		uf: String
	},
	location: {
		cidade: String,
		uf: String,
		pais: {
			id: Number,
			nome: String
		}
	},
	shelterRef: String
})

var Menor = module.exports = mongoose.model('menores', menorSchema)