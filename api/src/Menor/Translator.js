export default class Translator {
	constructor(deps = {}) {
		this.Interactor = deps.Interactor || require('./Interactor').default
	}

	post(request, response) {
        const { body } = request;

        const interactor = new this.Interactor();

        interactor.create(body)
            .then(message => {
                response.send(200, message)
            })
            .catch(error => {
                console.log(error)
                response.send(500, "Ocorreu um erro ao criar o menor")
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

	getById(request, response) {
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

	put() {}
	delete() {}
}