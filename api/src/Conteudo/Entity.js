export default class Entity {
	constructor(deps = {}) {
		this.Adapter = deps.Adapter || require('./Adapter').default
	}

	create(body) {
		const adapter = new this.Adapter()
		
		return adapter.save(body)
	}

	fetchAll() {
		const adapter = new this.Adapter()
		return adapter.fetchAll()
	}

	validateToken(body) {
		return new Promise((resolve, reject) => {
			resolve(body)
		})
	}

	update(body) {
		const adapter = new this.Adapter()
		
		return adapter.fetchAndUpdate(body)
	}

	remove(body) {
		const adapter = new this.Adapter()
		
		return adapter.delete(body.id)
	}
}