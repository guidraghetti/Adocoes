export default class Interactor {
	constructor(deps = {}) {
		this.Entity = deps.Entity || require('./Entity').default
	}

	create(menor) {
		const entity = new this.Entity();
		return entity.create(menor);
	}
}