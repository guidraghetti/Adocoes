export default class Translator {
	constructor(deps = {}) {
		this.Interactor = deps.Interactor || require('./Interactor').default
	}

	post(request, response) {
		const { body } = request

        const interactor = new this.Interactor()

        interactor.create(body)
            .then(message => {
                response.send(200, message)
            })
            .catch(error => {
                console.log(error)
            })
	}

	getAllVideos(request, response) {
		const { id } = request.params

		const interactor = new this.Interactor()

		interactor.fetchAllVideos(id)
			.then(message => {
				response.send(200, message)
            })
            .catch(error => {
                console.log(error)
            })
    }

	put(request, response) {
		const { body } = request
		const interactor = new this.Interactor()

		interactor.update(body)
            .then(message => {
                response.send(200, message)
    	})
    }

    get(request, response) {

        let interactor = new this.Interactor()
        
        return interactor.fetchAll()
            .then(result => {
                response.json(200, result)
            })
            .catch(error => {
                let status = error.status || 500
                response.json(status, error)
            })
    }
	
	deleteVideo(request, response) {
		const { body } = request

        const interactor = new this.Interactor()

        interactor.deleteVideo(body)
            .then(message => {
                console.log(200, message)
            })
            .catch(error => {
                console.log(error)
            })
	}

	delete(request, response) {

		let { body } = request
		const interactor = new this.Interactor()
		body.id = request.params.id

		interactor.remove(body)
            .then(message => {
                response.send(200, message)
            })
            .catch(error => {
                console.log(error)
            })

	}

	getImage(request, response) {

		let { body } = request
		const interactor = new this.Interactor()
		body.id = request.params.id

		interactor.getImage(body)
            .then(message => {
			})
			.catch(error => {
				console.log(error)
		})
	}

	postImages(request, response) {
		let { body } = request
		body.id = request.params.id

		const interactor = new this.Interactor()
		
        interactor.addImage(body)
            .then(message => {
                response.send(200, message)
            })
            .catch(error => {
                console.log(error)
            })
	}

	postVideo(request, response) {
		let { body } = request

		body.id = request.params.id
		
		const interactor = new this.Interactor()

		interactor.createVideo(body).then(message => {
			response.send(200, message)
		}).catch(error => {
			console.log(error)
		})
	}

	fetchAllImages(request, response) {

	}
}