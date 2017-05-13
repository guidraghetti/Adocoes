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
		return this.Interessado.find((err, doc) => {
			console.log(doc)
		})
	}	
	
	delete(body){
		console.log(body.id)
		return this.Interessado.remove({_id: body.id })
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
