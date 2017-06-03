export default class Entity {
	constructor(deps = {}) {
		this.Adapter = deps.Adapter || require('./Adapter').default
	}

	create(body) {
		const adapter = new this.Adapter()
		
		return adapter.save(body)
	}
	
	fetchOne(id) {
		const adapter = new this.Adapter()
		return adapter.fetchOne(id)
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

		const schema = Joi.object({
			idObject = Joi.string().required()
			nome = Joi.string().required()
			email = Joi.string().required().email()
			senha = Joi.string().required()
			ativo = Joi.string().required()
			nomeConjuge = Joi.string().required()
			dataNascimento = Joi.date().required()
			renda = Joi.number().precision(2)
		})

		return new Promise((resolve, reject) => {
            const {error, value} = Joi.validate(body, schema)
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


	delete(id) {
		const adapter = new this.Adapter()
		return adapter.delete(id)
	}
	
	put() {
		const adpater = new this.Adpter()
		return adapter.put();
	}
	
	
	addInterest() {
		const adapter = new this.Adapter()
		return adapter.addInterest()
	}
	
	fetchAllMenores() {
		const adapter = new this.Adapter()
		return adapter.fetchAllMenores()
	}
	
	putMenores() {
		const adapter = new this.Adapter()
		return adapter.putMenores()
	}
	
	insertView() {
		const adapter = new this.Adapter()
		return adapter.insertView()
	}
	
	fetchAllViews() {
		const adapter = new this.Adapter()
		return adapter.fetchAllViews()
	}
	
	insertInterest() {
		const adapter = new this.Adapter()
		return adapter.insertInterest()
	}
	
	fetchAllInterest() {
		const adapter = new this.Adapter()
		return adapter.fetchAllInterest()
	}
	
	deleteInterest() {
		const adapter = new this.Adapter()
		return adapter.deleteInterest()
	}
	
}
