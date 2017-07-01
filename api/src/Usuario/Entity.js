import Joi from 'Joi'

export default class Entity {

	constructor(deps = {}) {
		this.Adapter = deps.Adapter || new (require('./Adapter').default)()
	}

	save(usuario) {
		return this.Adapter.save(usuario)
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

	validate(body) {
		const schema = Joi.object({
			email: Joi.string().required().email(),
			senha: Joi.string().required(),
			nome: Joi.string().required(),
			cpf: Joi.number().required(),
			perfis: Joi.date().required(),
			refPerfilAdministrador: Joi.object().required(),
			refPerfilInteressado: Joi.object().required(),
			ativo: Joi.string().required()
		})
		
		const {error, value} = Joi.validate(body, schema)
		
		return new Promise((resolve, reject) => {
			if(error) {
					let messages = error.details.map(e => e.message)
					reject({
						status: 400,
						messages
					})
			} else if(value) {
				resolve(value)
			}
		})
	}

	findPerfisById(id) {
		return this.Adapter.findPerfisById(id)
	}

	updatePerfis(id, perfis) {
		return this.Adapter.updatePerfis(id, perfis)
	}

}