import mongoose from 'mongoose'

export default class Adapter {
	constructor(deps = {}) {
		this.Menor = mongoose.model('Menor')
	}

	save(menor) {
		const Menor = new this.Menor(menor)
		return Menor.save()
	}

	fetchAll() {
		return this.Menor.find((err,doc) => {
			return new Promise((resolve, reject) => {
				resolve(doc)
			})
		})
	}
		
	fetchAndUpdate() {
		return this.Menor.findOneAndUpdate({_id: body.id },{new: true}, body, (err, menor) => {
			return menor
		})
	}	
	
	fetchOrdination() {		
	}
	
	addIntersting() {
		return this.Menor.findOneAndUpdate({_id: body.id})
	}
	
	fetchAllIntersting() {
		
	}
	
	removeIntersting() {
		
	}
	
	createImage() {
		
	}
	
	fetchAllImage() {
		
	}
		
	fetchImage() {
		
	}
	
	removeImage() {
		
	}
	
	createImage() {
		
	}
	
	createVideo() {
		
	}
	
	fetchAllVideo() {
		
	}

	fetchVideo() {
		
	}
	
	removeVideo() {
		
	}
	
	
	
}