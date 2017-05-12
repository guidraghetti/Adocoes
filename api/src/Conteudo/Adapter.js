import mongoose from 'mongoose'

export default class Adapter {
	constructor(deps = {}) {
		this.Conteudo = mongoose.model('Conteudo')
	}

	save(body) {
		const conteudo = new this.Conteudo(body)

		return conteudo.save()
	}
}