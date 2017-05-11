import mongoose from 'mongoose'

const Schema = mongoose.schema

mongoose.model('Conteudo', {
	new Schema({..}, {strict: false})
})