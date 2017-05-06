export default class Translator {
	constructor(deps = {}) {
		this.Interactor = deps.Interactor || require('./Interactor').default
	}

	post(request, response) {
		const { body } = request

        const interactor = new this.Interactor()

        interactor.create(body)
            .then(message => {
                console.log(message)
            })
            .catch(error => {
                console.log(error)
            })
	}

	get() {}
	put() {}
	delete() {}
}