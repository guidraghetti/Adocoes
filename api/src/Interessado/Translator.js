export default class Translator {
	constructor(deps = {}) {
		this.Interactor = deps.Interactor || require('./Interactor').default
	}

	post(request, response) {
		const { body } = request

        const interactor = new this.Interactor()

        interactor.create(body)
            .then(message => {
                response.send(201, message)
            })
            .catch(error => {
                console.log(error)
            })
	}

	get(request, response) {
		const { body } = request
	
		const interactor = new this.Interactor()

		interactor.fetchAll()
			.then(message => {
                response.send(200, message)
            })
            .catch(error => {
                console.log(error)
            })
	}

	getInteressado(request, response) {
		const body = {
			id: request.params.id,
			...request.body
		}

		const interactor = new this.Interactor()

		interactor.findOneInteressado(body)
			.then(message => {
				response.json(200, message)
			})
			.catch(error => {
				console.log(error)
			})
	}

	put(request, response) {
		const body = {
			id: request.params.id,
			...request.body
		}

		delete body._id
		
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
                response.send(204, message)
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
	
    //
    // Visualizacoes
    //

    // RFI09: POST /interessados/{id_interessado}/visualizacoes
	postVisualizacao(request, response) {
		const body = { 
            id: request.params.id,
            ...request.body
        }

        const interactor = new this.Interactor()

        interactor.addVisualizacao(body)
            .then(message => {
                response.send(201, message)
            })
            .catch(error => {
                console.log(error)
            })
	}

	// RFI10: GET /interessados/{id_interessado}/visualizacoes
    getVisualizacao(request, response) {
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
	
    // RFI11: PUT /interessados/{id_interessado}/visualizacoes
	putVisualizacao(request, response) {
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
