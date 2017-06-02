import mongoose from 'mongoose'

export default class Adapter {
	constructor(deps = {}) {
		this.Usuario = mongoose.model('User')
	}

	salvar(usuario) {
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
		return this.Usuario.findById(id)
			.then(usuario => {
				if (body.username)
					usuario.username = body.username

				if (body.password)
					usuario.password = body.password

				return usuario.save(); 
			})
	}		

	delete(_id) {
		return this.Usuario.remove({ _id })
			.then(resultado => { return resultado.result.n > 0 })
	}
}