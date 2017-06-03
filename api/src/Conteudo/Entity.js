import Joi from 'Joi'
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

	validate(body) {
		console.log(body)
		const schema = Joi.object({
			_id: Joi.string().required(),
			nome: Joi.string().required(),
			ativo: Joi.boolean().required(),
			timeStampCriacao: Joi.date().default().required(),
			timeStampInicio: Joi.date().default().required(),
			timeStampFim: Joi.date().default().required()
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
		
	update(body) {
		const adapter = new this.Adapter()
		
		return adapter.fetchAndUpdate(body)
	}

	remove(body) {
		const adapter = new this.Adapter()
		
		return adapter.delete(body.id)
	}

	getImage(body) {
		const adapter = new this.Adapter()
		
		return adapter.getImagem(body.id)
	}

	addImage(body) {
		const adapter = new this.Adapter()

		return adapter.fetchAndAddImage(body)
	}

	find(body) {
		const adapter = new this.Adapter()
		
		return adapter.fetch(body.id)
	}

	deleteVideo(body) {
		const adapter = new this.Adapter()
		
		return adapter.deleteVideo(body.id)
	}

	createVideo(body) {
		const adapter = new this.Adapter()

		return adapter.addVideo(body)
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

	getImage(body) {
		const adapter = new this.Adapter()
		
		return adapter.getImagem(body.id)
	}

	addImage(body) {
		const adapter = new this.Adapter()

		return adapter.fetchAndAddImage(body)
	}

	find(body) {
		const adapter = new this.Adapter()
		
		return adapter.fetch(body.id)
	}

	deleteVideo(body) {
		const adapter = new this.Adapter()
		
		return adapter.deleteVideo(body.id)
	}

	createVideo(body) {
		const adapter = new this.Adapter()

		return adapter.addVideo(body)
	}
}