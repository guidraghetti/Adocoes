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
	validate(body, schema) {


			const schema = Joi.object(){
		name = Joi.string().require()
		gender = Joi.string().require().regex(/M|F/)
        birthDay = Joi.date().require().max('now').min('now') //somar data atual + 18 anos
        shelterGuide = Joi.string().require()
        birthCertificate = Joi.string().require()
        familyReferences = Joi.object()
        nationality = Joi.string().require()
        placeOfBirth = Joi.strin().require()
        location = Joi.string().require()
	    shelterRef = Joi.number().require()
	
			// let {error, value} = joi.validate(body, schema)
			return new Promise ((resolve, reject) => {

			if (error) reject(error)

			if (value) resolve(value)
		})
	}
}