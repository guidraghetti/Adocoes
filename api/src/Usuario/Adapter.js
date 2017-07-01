import mongoose from 'mongoose'

export default class Adapter {

	constructor(deps = {}) {
		this.Usuario = mongoose.model('Usuario')
	}

	save(usuario) {
		const usr = new this.Usuario(usuario)
		return usr.save()
	}

	fetchAll() {
		return this.Usuario.find()
	}

	findById(id) {
		return this.Usuario.findById(id)
	}

	update(id, body) {
		return this.Usuario.findOneAndUpdate({
			_id: id
		}, body, {
			upsert: false,
			new: true
		});
	}

	delete(_id) {
		return this.Usuario.remove({
				_id
			})
			.then(resultado => {
				return resultado.result.n > 0
			})
	}

	findPerfis(id) {
		const projection = {
			_id: 0,
			perfis: 1
		}
		return this.Usuario.findById(id, projection);
	}

	updatePerfis(id, perfis) {
		return this.Usuario.findOneAndUpdate({
			_id: id
		}, {
			perfis
		}, {
			upsert: false,
			new: true
		});
	}

}