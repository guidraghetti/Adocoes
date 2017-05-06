export default class Interactor {
	constructor(deps = {}) {
		this.Entity = deps.Entity || require('./Interactor').default
	}

	createNewConteudo(body) {
		const entity = new this.Entity()

		return entity.create(body)
	}
}