// import expect from 'expect.js'
// import sinon from 'sinon'
// import { Interactor } from '../../src/Users'

// describe('Users Interactor', () => {

//     let deps = {
//         Entity: class {
//             fetchAll() {}
//             fetchOne() {}
//             validateCreateBody() {}
//             validateCreateRules() {}
//             requestImages() {}
//             securePassword() {}
//             create() {}
//             validateLoginBody() {}
//             login() {}
//             validateUpdateBody() {}
//             validateUpdateRules() {}
//             update() {}
//             validateDeleteBody() {}
//             validateDeleteRules() {}
//             delete() {}
//             validateUpdateLastAccessBody() {}
//             validateChangePasswordBody() {}
//             validateChangePasswordRules() {}
//             createModel() {}
//         }
//     }

//     let entMock = null
//     afterEach(() => {
//         if(entMock && entMock.restore) entMock.restore()
//     })

//     describe('fetchAll method', () => {

//         it('should call entity fetchAll', () => {
//             let expectedResult = [
//                 { id: '1', param: 'user' },
//                 { id: '2', param: 'user' },
//                 { id: '3', param: 'user' },
//                 { id: '4', param: 'user' },
//                 { id: '5', param: 'user' },
//             ]

//             entMock = sinon.mock(deps.Entity.prototype)
//             entMock.expects('fetchAll')
//                 .once()
//                 .returns(Promise.resolve(expectedResult))

//             let interactor = new Interactor(deps)

//             return interactor.fetchAll()
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                     entMock.verify()
//                 })
//         })

//     })

//     describe('fetchOne method', () => {

//         it('should call entity fetchOne', () => {
//             let expectedResult = {
//                 id: 'test-id',
//                 some: 'data'
//             }

//             let body = {
//                 id: 'test-id'
//             }

//             entMock = sinon.mock(deps.Entity.prototype)
//             entMock.expects('fetchOne')
//                 .once()
//                 .withArgs(body.id)
//                 .returns(Promise.resolve(expectedResult))

//             let interactor = new Interactor(deps)

//             return interactor.fetchOne(body)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                     entMock.verify()
//                 })
//         })

//     })

//     describe('requestImages method', () => {

//         it('should call entity requestImages', () => {
//             let expectedResult = {
//                 id: 'test-id',
//                 some: 'data'
//             }

//             let body = {
//                 id: 'test-id'
//             }

//             entMock = sinon.mock(deps.Entity.prototype)
//             entMock.expects('requestImages')
//                 .once()
//                 .withArgs(body)
//                 .returns(Promise.resolve(expectedResult))

//             let interactor = new Interactor(deps)

//             return interactor.requestImages(body)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                     entMock.verify()
//                 })
//         })

//     })

//     describe('create method', () => {

//         it('should call validateCreateBody, validateCreateRules, securePassword and create', () => {
//             let body = {
//                 received: 'data',
//                 to: 'create'
//             }

//             let user = {
//                 user: 'data'
//             }

//             let valbodyResult = {
//                 valbody: 'data'
//             }

//             let validateResult = {
//                 validate: 'data'
//             }

//             let secureResult = {
//                 secure: 'data'
//             }

//             let createResult = {
//                 create: 'data'
//             }

//             let modelResult = {
//                 model: 'data'
//             }

//             entMock = sinon.mock(deps.Entity.prototype)
//             entMock.expects('validateCreateBody')
//                 .once()
//                 .withArgs(body)
//                 .returns(Promise.resolve(valbodyResult, {user}))
//             entMock.expects('validateCreateRules')
//                 .once()
//                 .withArgs(valbodyResult, {user})
//                 .returns(Promise.resolve(validateResult))
//             entMock.expects('securePassword')
//                 .once()
//                 .withArgs(validateResult, {user})
//                 .returns(Promise.resolve(secureResult))
//             entMock.expects('create')
//                 .once()
//                 .withArgs(secureResult, {login: true, user})
//                 .returns(Promise.resolve(createResult))
//             entMock.expects('createModel')
//                 .once()
//                 .withArgs(valbodyResult, {user})
//                 .returns(Promise.resolve(modelResult))

//             let interactor = new Interactor(deps)

//             return interactor.create(body, {user})
//                 .then(result => {
//                     expect(result).to.eql(createResult)
//                     entMock.verify()
//                 })

//         })

//         it('should if receive param login, pass to create', () => {
//             let body = {
//                 received: 'data',
//                 to: 'create'
//             }

//             let valbodyResult = {
//                 valbody: 'data'
//             }

//             let validateResult = {
//                 validate: 'data'
//             }

//             let secureResult = {
//                 secure: 'data'
//             }

//             let createResult = {
//                 create: 'data'
//             }

//             let modelResult = {
//                 model: 'data'
//             }

//             entMock = sinon.mock(deps.Entity.prototype)
//             entMock.expects('validateCreateBody')
//                 .once()
//                 .withArgs(body, {user: {}})
//                 .returns(Promise.resolve(valbodyResult))
//             entMock.expects('validateCreateRules')
//                 .once()
//                 .withArgs(valbodyResult, {user: {}})
//                 .returns(Promise.resolve(validateResult))
//             entMock.expects('securePassword')
//                 .once()
//                 .withArgs(validateResult, {user: {}})
//                 .returns(Promise.resolve(secureResult))
//             entMock.expects('create')
//                 .once()
//                 .withArgs(secureResult, {login: false, user: {}})
//                 .returns(Promise.resolve(createResult))
//             entMock.expects('createModel')
//                 .once()
//                 .withArgs(valbodyResult, {user: {}})
//                 .returns(Promise.resolve(modelResult))

//             let interactor = new Interactor(deps)

//             return interactor.create(body, {login: false})
//                 .then(result => {
//                     expect(result).to.eql(createResult)
//                     entMock.verify()
//                 })
//         })

//     })

//     describe('login method', () => {

//         it('should validateLoginBody and login', () => {
//              let body = {
//                 received: 'data',
//                 to: 'create'
//             }

//             let valbodyResult = {
//                 valbody: 'data'
//             }

//             let loginResult = {
//                 login: 'data'
//             }

//             entMock = sinon.mock(deps.Entity.prototype)
//             entMock.expects('validateLoginBody')
//                 .once()
//                 .withArgs(body)
//                 .returns(Promise.resolve(valbodyResult))
//             entMock.expects('login')
//                 .once()
//                 .withArgs(valbodyResult)
//                 .returns(Promise.resolve(loginResult))

//             let interactor = new Interactor(deps)

//             return interactor.login(body)
//                 .then(result => {
//                     expect(result).to.eql(loginResult)
//                     entMock.verify()
//                 })
//         })

//     })

//     describe('changePassword method', () => {

//         it('should call entity update method', () => {

//             let body = {
//                 received: 'data',
//                 to: 'create'
//             }

//             let user = {
//                 user: 'data'
//             }

//             let valbodyResult = {
//                 valbody: 'data'
//             }

//             let validateUpdResult = {
//                 validate: 'update'
//             }

//             let validateChangeResult = {
//                 validate: 'change'
//             }

//             let secureResult = {
//                 secure: 'data'
//             }

//             let updateResult = {
//                 update: 'data'
//             }

//             entMock = sinon.mock(deps.Entity.prototype)
//             entMock.expects('validateChangePasswordBody')
//                 .once()
//                 .withArgs(body, {user})
//                 .returns(Promise.resolve(valbodyResult))
//             entMock.expects('validateUpdateRules')
//                 .once()
//                 .withArgs(valbodyResult, {user})
//                 .returns(Promise.resolve(validateUpdResult))
//             entMock.expects('validateChangePasswordRules')
//                 .once()
//                 .withArgs(validateUpdResult, {user})
//                 .returns(Promise.resolve(validateChangeResult))
//             entMock.expects('update')
//                 .once()
//                 .withArgs(validateChangeResult, {user})
//                 .returns(Promise.resolve(updateResult))

//             let interactor = new Interactor(deps)

//             return interactor.changePassword(body, {user})
//                 .then(result => {
//                     expect(result).to.eql(updateResult)
//                     entMock.verify()
//                 })
//         })

//     })

//     describe('update method', () => {

//         it('should call entity update method', () => {

//             let body = {
//                 received: 'data',
//                 to: 'create'
//             }

//             let user = {
//                 user: 'data'
//             }

//             let valbodyResult = {
//                 valbody: 'data'
//             }

//             let validateResult = {
//                 validate: 'data'
//             }

//             let updateResult = {
//                 update: 'data'
//             }

//             entMock = sinon.mock(deps.Entity.prototype)
//             entMock.expects('validateUpdateBody')
//                 .once()
//                 .withArgs(body, {user})
//                 .returns(Promise.resolve(valbodyResult))
//             entMock.expects('validateUpdateRules')
//                 .once()
//                 .withArgs(valbodyResult, {user})
//                 .returns(Promise.resolve(validateResult))
//             entMock.expects('update')
//                 .once()
//                 .withArgs(validateResult, {user})
//                 .returns(Promise.resolve(updateResult))

//             let interactor = new Interactor(deps)

//             return interactor.update(body, {user})
//                 .then(result => {
//                     expect(result).to.eql(updateResult)
//                     entMock.verify()
//                 })
//         })

//         it('should call entity createModel if updateModel is defined', () => {

//             let body = {
//                 received: 'data',
//                 to: 'create'
//             }

//             let user = {
//                 user: 'data'
//             }

//             let valbodyResult = {
//                 valbody: 'data',
//                 updateModel: true
//             }

//             let validateResult = {
//                 validate: 'data'
//             }

//             let secureResult = {
//                 secure: 'data'
//             }

//             let updateResult = {
//                 update: 'data'
//             }

//             let modelResult = {
//                 model: 'data'
//             }

//             entMock = sinon.mock(deps.Entity.prototype)
//             entMock.expects('validateUpdateBody')
//                 .once()
//                 .withArgs(body, {user})
//                 .returns(Promise.resolve(valbodyResult))
//             entMock.expects('validateUpdateRules')
//                 .once()
//                 .withArgs(valbodyResult, {user})
//                 .returns(Promise.resolve(validateResult))
//             entMock.expects('update')
//                 .once()
//                 .withArgs(validateResult, {user})
//                 .returns(Promise.resolve(updateResult))
//             entMock.expects('createModel')
//                 .once()
//                 .withArgs(valbodyResult, {user})
//                 .returns(Promise.resolve(modelResult))

//             let interactor = new Interactor(deps)

//             return interactor.update(body, {user})
//                 .then(result => {
//                     expect(result).to.eql(updateResult)
//                     entMock.verify()
//                 })
//         })
//     })

//     describe('delete method', () => {

//         it('should call entity validateDeleteBody, validateDeleteRules and delete', () => {

//             let body = {
//                 received: 'data',
//                 to: 'create'
//             }

//             let user = {
//                 user: 'data'
//             }

//             let valbodyResult = {
//                 valbody: 'data'
//             }

//             let validateResult = {
//                 id: 'test-id',
//                 validate: 'data'
//             }

//             let deleteResult = {
//                 delete: 'data'
//             }

//             entMock = sinon.mock(deps.Entity.prototype)
//             entMock.expects('validateDeleteBody')
//                 .once()
//                 .withArgs(body, {user})
//                 .returns(Promise.resolve(valbodyResult))
//             entMock.expects('validateDeleteRules')
//                 .once()
//                 .withArgs(valbodyResult, {user})
//                 .returns(Promise.resolve(validateResult))
//             entMock.expects('delete')
//                 .once()
//                 .withArgs('test-id', {user})
//                 .returns(Promise.resolve(deleteResult))

//             let interactor = new Interactor(deps)

//             return interactor.delete(body, {user})
//                 .then(result => {
//                     expect(result).to.eql(deleteResult)
//                     entMock.verify()
//                 })
//         })

//     })

//     describe('updateEnter method', () => {

//         it('should call entity validateUpdateLastAccessBody and update', () => {

//             let body = {
//                 body: 'data'
//             }

//             let validateResult = {
//                 validate: 'data'
//             }

//             let updateResult = {
//                 update: 'data'
//             }

//             entMock = sinon.mock(deps.Entity.prototype)
//             entMock.expects('validateUpdateLastAccessBody')
//                 .once()
//                 .withArgs(body)
//                 .returns(Promise.resolve(validateResult))
//             entMock.expects('update')
//                 .once()
//                 .withArgs(validateResult)
//                 .returns(Promise.resolve(updateResult))

//             let interactor = new Interactor(deps)
//             return interactor.updateEnter(body)
//                 .then(result => {
//                     expect(result).to.eql(updateResult)
//                     entMock.verify()
//                 })
//         })

//     })

// })
