export default class Adapter {
	constructor(deps = {}) {
		this.Conteudo = mongoose.model('conteudo') //OOIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
	}

	save(bodi) {
		const conteudo = new Conteudo(body)
		
		return conteudo.save()
	}
}