export default class Entity {
	constructor(deps = {}) {
		this.Adapter = deps.Adapter || new (require('./Adapter').default)()
	}

	salvar(usuario) {
		return this.Adapter.salvar(usuario)
	}

	fetchAll() {
		return this.Adapter.fetchAll()
	}

	findById(id) {
		return this.Adapter.findById(id)
	}

	update(id, body) {
		return this.Adapter.update(id, body)
	}

	delete(id) {
		return this.Adapter.delete(id)
	}
}