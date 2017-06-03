export default class Interactor {
	constructor(deps = {}) {
		this.Entity = deps.Entity || require('./Entity').default
	}

	create(body) {
		let entity = new this.Entity()

		return entity.validate(body).then(body => {
			return entity.create(body) 
		})
	}

	fetchAll() {     

        let entity = new this.Entity()

        return entity.fetchAll()
    }

	update(body){

		const entity = new this.Entity()
		
		return entity.update(body)	

	}

	remove(body){

		const entity = new this.Entity()
		
		return entity.remove(body)	

	}

	getImage(body){

		const entity = new this.Entity()
		
		return entity.getImagem(body)	
	}

	findConteudo(body) {
		const entity = new this.Entity()

		return entity.find(body)
	}

	deleteVideo(body) {

		const entity = new this.Entity()

		return entity.delete(body)
	}
	
	addImage(body) {
		console.log('Interactor')
		const entity = new this.Entity()

		return entity.addImage(body)
	}

	createVideo(body) {
		const entity = new this.Entity()

		return entity.createVideo(body)
	}

	update(body){

		const entity = new this.Entity()
		
		return entity.update(body)	

	}

	remove(body){

		const entity = new this.Entity()
		
		return entity.remove(body)	

	}

	getImage(body){

		const entity = new this.Entity()
		
		return entity.getImagem(body)	
	}

	findConteudo(body) {
		const entity = new this.Entity()

		return entity.find(body)
	}

	deleteVideo(body) {

		const entity = new this.Entity()

		return entity.delete(body)
	}
	
	addImage(body) {
		const entity = new this.Entity()

		return entity.addImage(body)
	}

	createVideo(body) {
		const entity = new this.Entity()

		return entity.createVideo(body)
	}

	fetchAllVideos(id) {
		const entity = new this.Entity()

		return entity.fetchAllVideos(id)
	}
}