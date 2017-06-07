import Joi from 'Joi'
export default class Entity {
	constructor(deps = {}) {
		this.Adapter = deps.Adapter || new (require('./Adapter').default)()
	}
	
	create(body) {
		const adapter = new this.Adapter()
		
		return adapter.save(body)
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
			refUsuario: Joi.object().required(),
			name: Joi.string().required(),
			cpf: Joi.number().required(),
			email: Joi.string().required().email(),
			senha: Joi.string().required(),
			ativo: Joi.string().required(),
			nomeConjuge: Joi.string().required(),
			dataNascimento: Joi.date().required(),
			renda: Joi.number().precision(2),
			comprovantesRenda: Joi.object().required(),
			outrosDocumentos: Joi.object().required(),
			enderecos: Joi.object().required(),
			telefones: Joi.object().required(),
			interesses: Joi.object().required(),
			visualizacoes: Joi.object().required()

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

	getPerfilByUsuarioId(id) {
		return this.Adapter.getPerfilByUsuarioId(id)
	}
}