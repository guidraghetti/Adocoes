export default class Interactor {
	constructor(deps = {}) {
		this.Entity = deps.Entity || require('./Entity').default
	}

	create(body) {
		const entity = new this.Entity()
		
		return entity.create(body)
	}

	fetchAll(body) {
		const entity = new this.Entity()

		return entity.validateToken(body)
			.then(body => {
				entity.fetchAll()
			})
	}
	
	delete(body) {
		const entity = new this.Entity()

		return entity.validateToken(body)
			.then(body => {
				entity.delete(body)
			})
	}
	
	put(body) {
		const entity = new this.Entity()

		return entity.validateToken(body)
			.then(body => {
				entity.update()
			})
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
