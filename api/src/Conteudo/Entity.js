export default class Entity {
	constructor(deps = {}) {
		this.Adapter = deps.Adapter || require('./Adapter').default
	}

	create(body) {
		const entity = new this.Entity()
		
		return entity.validate(body).then(body => {
			create(body) }
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

	validate(body, schema) {

			const schema = Joi.object(){
			idObject = Joi.string().required()
			nome = Joi.string().required()
			ativo = Joi.boolean()required()
			timeStampCriacao = Joi.date().default().required() 
			timeStampInicio = Joi.date().default().required()
			timeStampFim = Joi.date().default().required()
		}

		// let {error, value} = joi.validate(body, schema)
		return new Promise ((resolve, reject) => {

			if (error) reject(error)

			if (value) resolve(value)
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