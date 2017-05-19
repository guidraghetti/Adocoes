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
                response.send(200, message)
            })
            .catch(error => {
                console.log(error)
            })
	}
}