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

	fetchOne(id) {
		console.log(id)
        return this.Interessado.findById(id, (err, result) => {
        	console.log(result)
        })
	}

	fetchAll() {
		return this.Interessado.find((err, doc) => {
			console.log(doc)
		})
	}	
	
	delete(id){
		return this.Interessado.remove({_id: id})
	}
	
	fetchOneAndUpdate(body) {

		return this.Interessado.findOneAndUpdate({_id: body.id }, {upsert: true, new: true}, body)
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
