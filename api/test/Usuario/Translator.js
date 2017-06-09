import expect from 'expect'
import sinon from 'sinon'
import Translator from '../../src/Usuario/Translator'

describe('Usuario Translator', () => {

    const deps = {
        Interactor: class {
            fetchAll() {}
            save() {}
            findById() {}
            update() {}
            delete() {}
        }
    }

    let intMock = null

    afterEach(() => {
        if(intMock && intMock.restore) intMock.restore()
    })

    describe('fetchAll', () => {

        it('chama o Interactor.fetchAll e retorna com código de status HTTP 200');
        // it('chama o Interactor.fetchAll e retorna com código de status HTTP 200', () => {
        //     let expectedResult = {
        //         expected: []
        //     }

        //     let req = {
        //         params: null
        //     }

        //     let res = {
        //         json: () => {}
        //     }

        //     let resMock = sinon.mock(res)
        //     resMock.expects('json')
        //         .once()
        //         .withArgs(200, expectedResult)

        //     intMock = sinon.mock(deps.Interactor.prototype)
        //     intMock.expects('fetchAll')
        //         .once()
        //         .returns(Promise.resolve(expectedResult))

        //     let translator = new Translator(deps)

        //     return translator.fetchAll(req, res)
        //         .then(() => {
        //             resMock.verify()
        //             intMock.verify()
        //         })
        // })

        it('should answer with a 500 if a random error occurs')

        it('should answer with error.status')
    })

    describe('getById', () => {
        it('should call the Interactor fetchOne method and answer with a 200')

        it('should answer with a 500 if a random error occurs')

        it('should answer with error.status')
    })

    describe('post', () => {
        it('should call the Interactor create method and answer with a 201, parsing login in params')

        it('should call with empty object if login is not defined in params')

        it('should answer with a 500 if a random error occurs')
        
        it('should answer with error.status')
    })

    describe('put', () => {
        it('should call the Interactor update method and answer with a 200')

        it('should answer with a 500 if a random error occurs')

        it('should answer with error.status')
    })

    describe('delete', () => {
        it('should call the Interactor delete method and answer with a 200')

        it('should answer with a 500 if a random error occurs')

        it('should answer with error.status')
    })
})
