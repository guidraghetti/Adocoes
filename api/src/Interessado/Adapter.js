import mongoose from 'mongoose'

export default class Adapter {
	constructor(deps = {}) {
		this.Interessado = mongoose.model('interessado')
	}

	save(body) {
		console.log(body)
		const interessado = new this.Interessado(body)

		return interessado.save()
	}	

	fetchAll() {
		return this.Interessado.find((err, doc) => {
			console.log(doc)
		})
	}	
	
	delete(id){
		console.log(id)
		return this.Interessado.remove({_id: id})
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
