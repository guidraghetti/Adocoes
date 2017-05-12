export default class Interactor {
	constructor(deps = {}) {
		this.Entity = deps.Entity || require('./Entity').default
	}

	create(body) {
		const entity = new this.Entity()
		
		return entity.create(body)
	}
}