export default class Adapter {
	constructor(deps = {}) {
		this.Conteudo = mongoose.model('Conteudo')
	}

	save(body) {
		const conteudo = new Conteudo(body)
		
		return conteudo.save()
	}
}