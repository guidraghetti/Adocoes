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

	get(request, response) {
		const { body } = request
	
		const interactor = new this.Interactor()

		interactor.fetchAll(request.header.accessToken)
			.then(message => {
                response.send(200, message)
            })
            .catch(error => {
                console.log(error)
            })
	}

	getInteressado(request, response) {
		const body = {
			_id: request.params.id,
			...request.body
		}

		const interactor = new this.Interactor()

		interactor.findOneInteressado(body)
			.then(message => {
				res.json(200, message)
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
            .catch(error => {
                console.log(error)
            })
	}
	
	
	delete(request, response) {
		const { body } = request
		
        const interactor = new this.Interactor()
		
        interactor.delete(request.params.id)
            .then(message => {
                response.send(200, message)
            })
            .catch(error => {
                console.log(error)
            })
	}	
	
	putInterest(request, response) {
		const { body } = request

        const interactor = new this.Interactor()

        interactor.addInterest(body)
            .then(message => {
                response.send(200, message)
            })
            .catch(error => {
                console.log(error)
            })
	}
	
	getOrdenacao(request, response) {
		const { body } = request
	
		const interactor = new this.Interactor()

		interactor.fetchAllMenores(request.header.accessToken)
			.then(message => {
                response.send(200, message)
            })
            .catch(error => {
                console.log(error)
            })	
	}
	
	putOrdenacao(request, response) {
		const { body } = request
	
		const interactor = new this.Interactor()

		interactor.putMenores(body)
			.then(message => {
                response.send(200, message)
            })
            .catch(error => {
                console.log(error)
            })	
	}
	
	putView(request, response) {
		const { body } = request

        const interactor = new this.Interactor()

        interactor.insertView(body)
            .then(message => {
                response.send(200, message)
            })
            .catch(error => {
                console.log(error)
            })
	}
	
	getViews(request, response) {
		const { body } = request
	
		const interactor = new this.Interactor()

		interactor.fetchAllViews(request.header.accessToken)
			.then(message => {
                response.send(200, message)
            })
            .catch(error => {
                console.log(error)
            })
	}
	
	putInterest(request, response) {
		const { body } = request

        const interactor = new this.Interactor()

        interactor.insertInterest(body)
            .then(message => {
                response.send(200, message)
            })
            .catch(error => {
                console.log(error)
            })
	}
	
	getInterest(request, response) {
		const { body } = request
	
		const interactor = new this.Interactor()

		interactor.fetchAllInterest(request.header.accessToken)
			.then(message => {
                response.send(200, message)
            })
            .catch(error => {
                console.log(error)
            })
	}
	
	deleteInterest(request, response) {
		const { body } = request

        const interactor = new this.Interactor()

        interactor.deleteInterest(body)
            .then(message => {
                response.send(200, message)
            })
            .catch(error => {
                console.log(error)
            })
	}
	
	
	
}
