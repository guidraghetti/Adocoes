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
		city: String,
		uf: String
	},
	location: {
		city: String,
		uf: String,
		country: {
			id: Number,
			name: String
		}
	},
	shelterRef: String
})

var Menor = module.exports = mongoose.model('menores', menorSchema)