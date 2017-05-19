import mongoose from 'mongoose'

export default class Adapter {
	constructor(deps = {}) {
		this.Conteudo = mongoose.model('Conteudo')
	}

	save(body) {
		const conteudo = new this.Conteudo(body)

		return conteudo.save()
	}

	fetchAll() {
		return this.Conteudo.find()
	}
	
	fetchAndAddImage(body) {
		console.log('Adapter')
		return this.Conteudo.findOneAndUpdate({_id: body.id}, 
			{$pushAll: {'images': body.images}}, {upsert: true, new: true})
	}

	fetchAndUpdate(body){
		return this.Conteudo.findOneAndUpdate({_id: body.id },{new: true}, body, (err, doc) => {
			return doc
		})
	}

	delete(id){
		return this.Conteudo.remove({_id: id })
	}

	getImage(id){
		return this.Conteudo.getImagem({_id: id })
	}
}