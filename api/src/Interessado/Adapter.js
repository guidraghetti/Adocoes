import mongoose from 'mongoose'

export default class Adapter {
	constructor(deps = {}) {
		this.Interessado = mongoose.model('Interessado')
	}

	save(body) {
		const interessado = new this.Interessado(body)

		return interessado.save()
	}

	fetchAll() {
		return this.Interessado.find()
	}
	
	validateToken(body) {
		return new Promise((resolve, reject) => {
			resolve(body)
		})
	}
	
	delete(body) {
		return interessado.delete()
	}
	
	delete	
	addInterest
	fetchAllMenores
	putMenores
	insertView
	fetchAllViews
	insertInterest
	fetchAllInterest
	deleteInterest
	
}
