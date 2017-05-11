import { mongoose, Schema } from 'mongoose'

mongoose.model('Conteudo', {
	new Schema({..}, {strict: false})
})