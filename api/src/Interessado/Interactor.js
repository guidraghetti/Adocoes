export default class Interactor {
	constructor(deps = {}) {
		this.Entity = deps.Entity || require('./Entity').default
	}

	create(body) {
		const entity = new this.Entity()
		
		return entity.validate(body).then(body => {
			entity.create(body) 
		})
	}
	
	findOneInteressado(body) {
		const entity = new this.Entity()

		return entity.fetchOne(body.id)
	}

	fetchAll(body) {
		const entity = new this.Entity()

		return entity.validateToken(body)
			.then(body => {
				entity.fetchAll()
			})
	}
	
	delete(id) {
		const entity = new this.Entity()

		return entity.delete(id)
	}
	
	update(body) {
		const entity = new this.Entity()

		return entity.update(body)
	}	
	
	addInterest(body) {
		const entity = new this.Entity()
		
		return entity.validateToken(body)
		.then(body => {
			entity.addInterest()
		})		
	}
	
	fetchAllMenores(body) {
		const entity = new this.Entity()

		return entity.validateToken(body)
			.then(body => {
				entity.fetchAllMenores()
			})
	}
	
	putMenores(body) {
		const entity = new this.Entity()

		return entity.validateToken(body)
			.then(body => {
				entity.putMenores()
			})
	}	
	
	insertView(body) {
		const entity = new this.Entity()

		return entity.validateToken(body)
			.then(body => {
				entity.insertView()
			})
	}
	
	fetchAllViews(body) {
		const entity = new this.Entity()

		return entity.validateToken(body)
			.then(body => {
				entity.fetchAllViews()
			})
	}
		
	insertInterest(body) {
		const entity = new this.Entity()

		return entity.validateToken(body)
			.then(body => {
				entity.insertInterest()
			})
	}
	
	fetchAllInterest(body) {
		const entity = new this.Entity()

		return entity.validateToken(body)
			.then(body => {
				entity.fetchAllInterest()
			})
	}
	
	deleteInterest(body) {
		const entity = new this.Entity()

		return entity.validateToken(body)
			.then(body => {
				entity.deleteInterest()
			})
	}
	
	
}
