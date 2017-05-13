import mongoose from 'mongoose'

export default class Adapter {
	constructor(deps = {}) {
		this.Interessado = mongoose.model('interessado')
	}

	save(body) {
		const interessado = new this.Interessado(body)

		return interessado.save()
	}

	fetchAll() {
		return this.Interessado.find((err, doc) => {
			console.log(doc)
		})
	}
	
	validateToken(body) {
		return new Promise((resolve, reject) => {
			resolve(body)
		})
	}
	
	delete(body) {
		return interessado.delete()
	}
	
	addInsert() {		
	}
	
	fetchAllMenores() {		
	}
	
	putMenores() {		
	}
	
	insertView() {	
	}
	
	fetchAllViews(){
	}
	
	insertInterest(){
	}
	
	fetchAllInterest(){
	}
	
	deleteInterest() {
	}
	
	
}
