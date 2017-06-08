// import expect from 'expect.js'
// import sinon from 'sinon'
// import { Entity } from '../../src/Users'

// describe('Users Entity', () => {

//     let deps = {
//         Adapter: class {
//             fetchOne() {}
//             fetchAll() {}
//             requestImages() {}
//             save() {}
//             update() {}
//             delete() {}
//             createModel() {}
//         },
//         uuid: {
//             v4: () => '12345-test-uuid-6789'
//         },
//         jwt: {
//             sign: () => {}
//         },
//         moment: () => ({
//             toISOString: () => '2017-05-01T12:10:59.622'
//         }),
//         config: {
//             secret: 'api-12345-secret',
//             accessLevel: {
//                 firstAccess: {
//                     level: 0
//                 },
//                 secondAccess: {
//                     level: 1
//                 }
//             }
//         },
//         bcrypt: {
//             hash: () => {},
//             compareSync: () => {},
//         }
//     }

//     let adpMock = null
//     let jwtMock = null
//     afterEach(() => {
//         if(adpMock && adpMock.restore) adpMock.restore()
//         if(jwtMock && jwtMock.restore) jwtMock.restore()
//     })

//     describe('fetchOne method', () => {

//         it('should call adapter fetchOne method', () => {
//             let expectedResult = {
//                 id: 'test-id',
//                 other: 'data'
//             }

//             let id = 'test-id'

//             adpMock = sinon.mock(deps.Adapter.prototype)
//             adpMock.expects('fetchOne')
//                 .once()
//                 .withArgs('test-id')
//                 .returns(Promise.resolve(expectedResult))

//             let entity = new Entity(deps)

//             return entity.fetchOne(id)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                     adpMock.verify()
//                 })
//         })

//     })

//     describe('fetchAll method', () => {

//         it('should call adapter fetchAll method', () => {
//             let expectedResult = [
//                 { id: '1', login: '1', password: '1' },
//                 { id: '2', login: '2', password: '2' },
//                 { id: '3', login: '3', password: '3' },
//                 { id: '4', login: '4', password: '4' },
//             ]

//             adpMock = sinon.mock(deps.Adapter.prototype)
//             adpMock.expects('fetchAll')
//                 .once()
//                 .returns(Promise.resolve(expectedResult))

//             let entity = new Entity(deps)

//             return entity.fetchAll()
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                     adpMock.verify()
//                 })
//         })

//     })

//     describe('requestImages method', () => {

//         it('should call adapter requestImages', () => {
//             let expectedResult = {
//                 requestImages: 'result'
//             }

//             let body = {
//                 body: 'received',
//             }

//             let entity = new Entity(deps)

//             adpMock = sinon.mock(deps.Adapter.prototype)
//             adpMock.expects('requestImages')
//                 .once()
//                 .withArgs(body)
//                 .returns(Promise.resolve(expectedResult))

//             return entity.requestImages(body)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                     adpMock.verify()
//                 })

//         })

//     })

//     describe('validateCreateBody method', () => {

//         it('should accept login, password, name, occupation and pictures, then result with an ID and first accessLevel from config', () => {
//             let expectedResult = {
//                 id: '12345-test-uuid-6789',
//                 login: 'some-login',
//                 password: 'password',
//                 access: 'firstAccess',
//                 firstName: 'Jao',
//                 lastName: 'Silva',
//                 occupation: 'Morador',
//                 createdAt: '2017-05-01T12:10:59.622',
//                 lastAccess: '2017-05-01T12:10:59.622',
//                 pictures: {
//                     id: 'test-imageid',
//                     images: [
//                         { img: 'img1', index: 0 },
//                         { img: 'img2', index: 1 },
//                         { img: 'img3', index: 2 },
//                         { img: 'img4', index: 3 },
//                         { img: 'img5', index: 4 },
//                     ]
//                 },
//             }

//             let body = {
//                 login: 'some-login',
//                 password: 'password',
//                 firstName: 'Jao',
//                 lastName: 'Silva',
//                 occupation: 'Morador',
//                 pictures: {
//                     id: 'test-imageid',
//                     images: [
//                         { img: 'img1', index: 0 },
//                         { img: 'img2', index: 1 },
//                         { img: 'img3', index: 2 },
//                         { img: 'img4', index: 3 },
//                         { img: 'img5', index: 4 },
//                     ]
//                 },
//             }

//             let entity = new Entity(deps)
//             return entity.validateCreateBody(body)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                 })
//         })

//         it('should result with the lower priority access level', () => {
//             let expectedResult = {
//                 id: '12345-test-uuid-6789',
//                 login: 'some-login',
//                 password: 'password',
//                 firstName: 'Jao',
//                 lastName: 'Silva',
//                 occupation: 'Morador',
//                 access: 'lower',
//                 createdAt: '2017-05-01T12:10:59.622',
//                 lastAccess: '2017-05-01T12:10:59.622',
//                 pictures: {
//                     id: 'test-imageid',
//                     images: [
//                         { img: 'img1', index: 0 },
//                         { img: 'img2', index: 1 },
//                         { img: 'img3', index: 2 },
//                         { img: 'img4', index: 3 },
//                         { img: 'img5', index: 4 },
//                     ]
//                 },
//             }

//             let body = {
//                 login: 'some-login',
//                 password: 'password',
//                 firstName: 'Jao',
//                 lastName: 'Silva',
//                 occupation: 'Morador',
//                 pictures: {
//                     id: 'test-imageid',
//                     images: [
//                         { img: 'img1', index: 0 },
//                         { img: 'img2', index: 1 },
//                         { img: 'img3', index: 2 },
//                         { img: 'img4', index: 3 },
//                         { img: 'img5', index: 4 },
//                     ]
//                 },
//             }

//             let localDeps = {
//                 ...deps,
//                 config: {
//                     ...deps.config,
//                     accessLevel: {
//                         greater: {
//                             level: 1
//                         },
//                         lower: {
//                             level: 0
//                         }
//                     }
//                 }
//             }

//             let entity = new Entity(localDeps)
//             return entity.validateCreateBody(body)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                 })
//         })

//         it('should reject if login or password is undefined', () => {
//             let expectedResult = {
//                 id: '12345-test-uuid-6789',
//                 login: 'some-login',
//                 password: 'password'
//             }

//             let body = {
//                 login: 'some-login',
//             }

//             let failMess = 'Resolving without password'
//             let entity = new Entity(deps)
//             return entity.validateCreateBody(body)
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(400)
//                     expect(e.messages[0]).to.contain('"password"')
//                 })
//         })

//         it('should reject if access is invalid', () => {
//             let body = {
//                 login: 'some-login',
//                 password: 'password',
//                 firstName: 'Jao',
//                 lastName: 'Silva',
//                 occupation: 'Morador',
//                 access: 'not_valid',
//                 pictures: {
//                     id: 'test-imageid',
//                     images: [
//                         { img: 'img1', index: 0 },
//                         { img: 'img2', index: 1 },
//                         { img: 'img3', index: 2 },
//                         { img: 'img4', index: 3 },
//                         { img: 'img5', index: 4 },
//                     ]
//                 },
//             }

//             let failMess = 'Resolving with wrong access'
//             let entity = new Entity(deps)
//             return entity.validateCreateBody(body)
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(400)
//                     expect(e.messages[0]).to.contain('"access"')
//                 })
//         })

//         it('should reject body is undefined', () => {

//             let failMess = 'Resolving with body is undefined'
//             let entity = new Entity(deps)
//             return entity.validateCreateBody()
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(400)
//                     expect(e.messages[0]).to.contain('"value"')
//                 })
//         })

//     })

//     describe('validateCreateRules method', () => {

//         it('should resolve if everything is ok', () => {
//             let fetchResult = [
//                 { id: '1', login: '1', password: '1' },
//                 { id: '2', login: '2', password: '2' },
//                 { id: '3', login: '3', password: '3' },
//                 { id: '4', login: '4', password: '4' }
//             ]

//             let body = {
//                 id: 'some-id',
//                 login: 'login-taken',
//                 password: 'random-pass'
//             }

//             let entity = new Entity(deps)

//             let entMock = sinon.mock(entity)
//             entMock.expects('fetchAll')
//                 .once()
//                 .withArgs()
//                 .returns(Promise.resolve(fetchResult))

//             let failMess = 'Resolving with login duplicated'
//             return entity.validateCreateRules(body)
//                 .then(result => {
//                     expect(result).to.eql(body)
//                     entMock.verify()
//                 })
//         })

//         it('should reject if access is greater than creator access', () => {
//             let creator = {
//                 id: 'creator',
//                 access: 'firstAccess'
//             }

//             let body = {
//                 id: 'new-user',
//                 access: 'secondAccess'
//             }

//             let failMess = 'Resolving wrong access'
//             let entity = new Entity(deps)
//             return entity.validateCreateRules(body, {user: creator})
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(401)
//                 })
//         })

//         it('should reject if the login already being taken', () => {
//             let fetchResult = [
//                 { id: '1', login: '1', password: '1' },
//                 { id: '2', login: '2', password: '2' },
//                 { id: '3', login: 'login-taken', password: '3' },
//                 { id: '4', login: '4', password: '4' }
//             ]

//             let body = {
//                 id: 'some-id',
//                 login: 'login-taken',
//                 password: 'random-pass'
//             }

//             let entity = new Entity(deps)

//             let entMock = sinon.mock(entity)
//             entMock.expects('fetchAll')
//                 .once()
//                 .withArgs()
//                 .returns(Promise.resolve(fetchResult))

//             let failMess = 'Resolving with login duplicated'
//             return entity.validateCreateRules(body)
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(409)
//                     entMock.verify()
//                 })
//         })

//     })

//     describe('securePassword method', () => {

//         it('should call bcrypt.hash with body.password and 10, resulting in a encrypt pass', () => {
//             let expectedResult = {
//                 id: '100',
//                 login: 'user-login',
//                 password: 'encrypted-password',
//                 other: 'data'
//             }

//             let body = {
//                 id: '100',
//                 login: 'user-login',
//                 password: 'normal-password',
//                 other: 'data'
//             }

//             let entity = new Entity(deps)

//             let hashCalled = false
//             entity.bcrypt.hash = (password, salt, cb) => {
//                 expect(password).to.eql('normal-password')
//                 expect(salt).to.eql(10)
//                 hashCalled = true
//                 cb(null, 'encrypted-password')
//             }

//             return entity.securePassword(body)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                     expect(hashCalled).to.be.ok()
//                 })

//         })

//         it('should reject if bcrypt fail', () => {
//             let expectedError = {
//                 expected: 'error'
//             }

//             let body = {
//                 id: '100',
//                 login: 'user-login',
//                 password: 'normal-password',
//                 other: 'data'
//             }

//             let entity = new Entity(deps)

//             let hashCalled = false
//             entity.bcrypt.hash = (password, salt, cb) => {
//                 expect(password).to.eql('normal-password')
//                 expect(salt).to.eql(10)
//                 hashCalled = true
//                 cb(expectedError)
//             }

//             let failMess = 'Resolving with hash failing'
//             return entity.securePassword(body)
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e).to.eql(expectedError)
//                 })

//         })

//     })

//     describe('create method', () => {

//         it('should call adapter save method and this._generateToken', () => {
//             let expectedResult = {
//                 type: 'Bearer',
//                 token: 'some-token-generated-with-user-data'
//             }

//             let createResult = {
//                 create: 'data',
//             }

//             let expectedParams = {
//                 body: 'received',
//                 images: [ 'img1', 'img2', 'img3', 'img4', 'img5' ]
//             }

//             let body = {
//                 body: 'received',
//                 pictures: {
//                     id: 'test-imageid',
//                     images: [
//                         { img: 'img1', index: 0 },
//                         { img: 'img2', index: 1 },
//                         { img: 'img3', index: 2 },
//                         { img: 'img4', index: 3 },
//                         { img: 'img5', index: 4 },
//                     ]
//                 }
//             }

//             let entity = new Entity(deps)

//             adpMock = sinon.mock(deps.Adapter.prototype)
//             adpMock.expects('save')
//                 .once()
//                 .withArgs(expectedParams)
//                 .returns(Promise.resolve(createResult))

//             let entMock = sinon.mock(entity)
//             entMock.expects('_generateToken')
//                 .once()
//                 .withArgs(createResult)
//                 .returns(Promise.resolve(expectedResult))

//             return entity.create(body)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                     adpMock.verify()
//                     entMock.verify()
//                 })

//         })

//         it('should if receive login: false, should not call generate token', () => {
//             let expectedResult = {
//                 type: 'Bearer',
//                 token: 'some-token-generated-with-user-data'
//             }

//             let createResult = {
//                 create: 'data',
//             }

//             let expectedParams = {
//                 body: 'received',
//                 images: [ 'img1', 'img2', 'img3', 'img4', 'img5' ]
//             }

//             let body = {
//                 body: 'received',
//                 pictures: {
//                     id: 'test-imageid',
//                     images: [
//                         { img: 'img1', index: 0 },
//                         { img: 'img2', index: 1 },
//                         { img: 'img3', index: 2 },
//                         { img: 'img4', index: 3 },
//                         { img: 'img5', index: 4 },
//                     ]
//                 }
//             }

//             let entity = new Entity(deps)

//             adpMock = sinon.mock(deps.Adapter.prototype)
//             adpMock.expects('save')
//                 .once()
//                 .withArgs(expectedParams)
//                 .returns(Promise.resolve(createResult))

//             let entMock = sinon.mock(entity)
//             entMock.expects('_generateToken')
//                 .never()

//             return entity.create(body, {login: false})
//                 .then(result => {
//                     expect(result).to.eql(createResult)
//                     adpMock.verify()
//                     entMock.verify()
//                 })

//         })

//     })

//     describe('validateLoginBody method', () => {

//         it('should accept login and password', () => {
//             let expectedResult = {
//                 login: 'some-login',
//                 password: 'password',
//             }

//             let body = {
//                 login: 'some-login',
//                 password: 'password'
//             }

//             let entity = new Entity(deps)
//             return entity.validateLoginBody(body)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                 })
//         })

//         it('should reject if login or password is undefined', () => {
//             let body = {
//                 login: 'some-login',
//             }

//             let failMess = 'Resolving without password'
//             let entity = new Entity(deps)
//             return entity.validateLoginBody(body)
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(400)
//                     expect(e.messages[0]).to.contain('"password"')
//                 })
//         })

//         it('should reject if body is undefined', () => {

//             let failMess = 'Resolving with body undefined'
//             let entity = new Entity(deps)
//             return entity.validateLoginBody()
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(400)
//                     expect(e.messages[0]).to.contain('"value"')
//                 })
//         })

//     })

//     describe('login method', () => {

//         it('should find the user, than if the password is the same, call _generateToken', () => {
//             let expectedResult = {
//                 type: 'Bearer',
//                 token: 'some-user-token'
//             }

//             let fetchResult = [
//                 { id: '1', login: '1', password: '1' },
//                 { id: '2', login: '2', password: '2' },
//                 { id: '3', login: '3', password: '3' },
//                 { id: '4', login: 'user-login', password: 'pass' },
//                 { id: '5', login: '5', password: '5' },
//             ]

//             let body = {
//                 login: 'user-login',
//                 password: 'pass'
//             }

//             let userInfo = {
//                 id: '4',
//                 login: 'user-login',
//                 password: 'pass'
//             }

//             let entity = new Entity(deps)

//             let entMock = sinon.mock(entity)
//             entMock.expects('fetchAll')
//                 .once()
//                 .returns(Promise.resolve(fetchResult))
//             entMock.expects('_checkPassword')
//                 .once()
//                 .withArgs(userInfo.password, body.password)
//                 .returns(true)
//             entMock.expects('_generateToken')
//                 .once()
//                 .withArgs(userInfo)
//                 .returns(Promise.resolve(expectedResult))

//              return entity.login(body)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                     entMock.verify()
//                 })
//         })

//         it('should reject with a 401 if the password is wrong', () => {
//             let expectedResult = {
//                 type: 'Bearer',
//                 token: 'some-user-token'
//             }

//             let fetchResult = [
//                 { id: '1', login: '1', password: '1' },
//                 { id: '2', login: '2', password: '2' },
//                 { id: '3', login: '3', password: '3' },
//                 { id: '4', login: 'user-login', password: 'pass' },
//                 { id: '5', login: '5', password: '5' },
//             ]

//             let body = {
//                 login: 'user-login',
//                 password: 'wrong-pass'
//             }

//             let userInfo = {
//                 id: '4',
//                 login: 'user-login',
//                 password: 'pass'
//             }

//             let token = 'some-user-token'

//             let entity = new Entity(deps)

//             let entMock = sinon.mock(entity)
//             entMock.expects('fetchAll')
//                 .once()
//                 .returns(Promise.resolve(fetchResult))
//             entMock.expects('_checkPassword')
//                 .once()
//                 .withArgs(userInfo.password, body.password)
//                 .returns(false)
//             entMock.expects('_generateToken')
//                 .never()
//                 .withArgs(userInfo)
//                 .returns(Promise.resolve(token))

//             let failMess = 'Resolving with wrong password'
//             return entity.login(body)
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(401)
//                     entMock.verify()
//                 })
//         })

//         it('should reject with a 401 if the user could not be found', () => {
//             let expectedResult = {
//                 type: 'Bearer',
//                 token: 'some-user-token'
//             }

//             let fetchResult = [
//                 { id: '1', login: '1', password: '1' },
//                 { id: '2', login: '2', password: '2' },
//                 { id: '3', login: '3', password: '3' },
//                 { id: '4', login: '4', password: 'pass' },
//                 { id: '5', login: '5', password: '5' },
//             ]

//             let body = {
//                 login: 'user-login',
//                 password: 'wrong-pass'
//             }

//             let userInfo = {
//                 id: '4',
//                 login: 'user-login',
//                 password: 'pass'
//             }

//             let token = 'some-user-token'

//             let entity = new Entity(deps)

//             let entMock = sinon.mock(entity)
//             entMock.expects('fetchAll')
//                 .once()
//                 .returns(Promise.resolve(fetchResult))
//             entMock.expects('_generateToken')
//                 .never()
//                 .withArgs(userInfo)
//                 .returns(Promise.resolve(token))

//             let failMess = 'Resolving with wrong not found user'
//             return entity.login(body)
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(401)
//                     entMock.verify()
//                 })
//         })

//     })

//     describe('validateChangePasswordBody method', () => {

//         it('should accept an id, oldPassword, newPassword', () => {
//             let body = {
//                 id: 'test-id',
//                 oldPassword: 'old-password',
//                 newPassword: 'new-password',
//             }

//             let entity = new Entity(deps)
//             return entity.validateChangePasswordBody(body)
//                 .then(result => {
//                     expect(result).to.eql(body)
//                 })
//         })

//     })

//     describe('validateChangePasswordRules method', () => {

//         it('should reject if user do not exits', () => {
//             let body = {
//                 id: 'test-id',
//                 oldPassword: 'old-password',
//                 newPassword: 'new-password',
//             }

//             let userError = {
//                 error: 'data'
//             }

//             let entity = new Entity(deps)

//             let entMock = sinon.mock(entity)
//             entMock.expects('fetchOne')
//                 .once()
//                 .withArgs('test-id')
//                 .returns(Promise.reject(userError))

//             let failMess = 'Resolving with 404 user'
//             return entity.validateChangePasswordRules(body)
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e).to.eql(userError)
//                     entMock.verify()
//                 })
//         })

//         it('should reject _checkPassword returns false', () => {
//             let body = {
//                 id: 'test-id',
//                 oldPassword: 'old-password',
//                 newPassword: 'new-password',
//             }

//             let userData = {
//                 id: 'test-id',
//                 password: 'some-hash-pass',
//             }

//             let entity = new Entity(deps)

//             let entMock = sinon.mock(entity)
//             entMock.expects('fetchOne')
//                 .once()
//                 .withArgs('test-id')
//                 .returns(Promise.resolve(userData))

//             entMock.expects('_checkPassword')
//                 .once()
//                 .withArgs('some-hash-pass', 'old-password')
//                 .returns(false)

//             let failMess = 'Resolving wrong password'
//             return entity.validateChangePasswordRules(body)
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(401)
//                     entMock.verify()
//                 })
//         })

//         it('should resolve with password being the new hash', () => {
//             let expectedResult = {
//                 id: 'test-id',
//                 password: 'new-password-hash'
//             }

//             let secureParams = {
//                 id: 'test-id',
//                 password: 'new-password',
//             }

//             let body = {
//                 id: 'test-id',
//                 oldPassword: 'old-password',
//                 newPassword: 'new-password',
//             }

//             let userData = {
//                 id: 'test-id',
//                 password: 'some-hash-pass',
//             }

//             let entity = new Entity(deps)

//             let entMock = sinon.mock(entity)
//             entMock.expects('fetchOne')
//                 .once()
//                 .withArgs('test-id')
//                 .returns(Promise.resolve(userData))
//             entMock.expects('_checkPassword')
//                 .once()
//                 .withArgs('some-hash-pass', 'old-password')
//                 .returns(true)
//             entMock.expects('securePassword')
//                 .once()
//                 .withArgs(secureParams)
//                 .returns(Promise.resolve(expectedResult))

//             return entity.validateChangePasswordRules(body)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                     entMock.verify()
//                 })
//         })

//     })

//     describe('validateUpdateBody method', () => {

//         it('should accept an id and access', () => {
//             let body = {
//                 id: 'test-id',
//                 access: 'secondAccess',
//                 firstName: 'Jao',
//                 lastName: 'Silva',
//                 occupation: 'Morador',
//                 updateModel: true,
//                 pictures: {
//                     id: 'test-imageid',
//                     images: [
//                         { img: 'img1', index: 0 },
//                         { img: 'img2', index: 1 },
//                         { img: 'img3', index: 2 },
//                         { img: 'img4', index: 3 },
//                         { img: 'img5', index: 4 },
//                     ]
//                 },
//             }

//             let entity = new Entity(deps)
//             return entity.validateUpdateBody(body)
//                 .then(result => {
//                     expect(result).to.eql(body)
//                 })
//         })

//         it('should reject if body is undefined', () => {

//             let failMess = 'Resolving with undefined body'
//             let entity = new Entity(deps)
//             return entity.validateUpdateBody()
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(400)
//                     expect(e.messages[0]).to.contain('"value"')
//                 })
//         })

//         it('should reject if random param is defined', () => {
//             let body = {
//                 id: 'test-id',
//                 access: 'secondAccess',
//                 firstName: 'Jao',
//                 lastName: 'Silva',
//                 occupation: 'Morador',
//                 updateModel: true,
//                 random: 'random-param'
//             }

//             let failMess = 'Resolving with random param'
//             let entity = new Entity(deps)
//             return entity.validateUpdateBody(body)
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(400)
//                     expect(e.messages[0]).to.contain('"random"')
//                 })
//         })

//         it('should reject if id is not defined', () => {
//             let body = {
//                 access: 'secondAccess',
//             }

//             let failMess = 'Resolving with random param'
//             let entity = new Entity(deps)
//             return entity.validateUpdateBody(body)
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(400)
//                     expect(e.messages[0]).to.contain('"id"')
//                 })
//         })

//         it('should reject if the access is not in config', () => {
//             let body = {
//                 id: 'test-id',
//                 access: 'thirdAccess',
//             }

//             let failMess = 'Resolving with invalid access'
//             let entity = new Entity(deps)
//             return entity.validateUpdateBody(body)
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(400)
//                     expect(e.messages[0]).to.contain('"access"')
//                 })
//         })

//     })

//     describe('validateUpdateRules method', () => {

//         it('should reject if access is greater than editor access', () => {
//             let editor = {
//                 id: 'editor',
//                 access: 'firstAccess'
//             }

//             let body = {
//                 id: 'new-user',
//                 access: 'secondAccess'
//             }

//             let failMess = 'Resolving wrong access'
//             let entity = new Entity(deps)
//             return entity.validateUpdateRules(body, {user: editor})
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(401)
//                 })
//         })

//         it('should reject if editor access is minor than user', () => {

//             let editor = {
//                 id: 'editor',
//                 access: 'firstAccess'
//             }

//             let body = {
//                 id: 'edit-user',
//                 firstName: 'user-name'
//             }

//             let oldData = {
//                 id: 'edit-user',
//                 access: 'secondAccess'
//             }

//             let entity = new Entity(deps)

//             let entMock = sinon.mock(entity)
//             entMock.expects('fetchOne')
//                 .once()
//                 .withArgs('edit-user')
//                 .returns(Promise.resolve(oldData))

//             let failMess = 'Resolving wrong access'
//             return entity.validateUpdateRules(body, {user: editor})
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(401)
//                     entMock.verify()
//                 })
//         })

//         it('should reject if editor access is equal than user', () => {

//             let editor = {
//                 id: 'editor',
//                 access: 'firstAccess'
//             }

//             let body = {
//                 id: 'edit-user',
//                 firstName: 'user-name'
//             }

//             let oldData = {
//                 id: 'edit-user',
//                 access: 'firstAccess'
//             }

//             let entity = new Entity(deps)

//             let entMock = sinon.mock(entity)
//             entMock.expects('fetchOne')
//                 .once()
//                 .withArgs('edit-user')
//                 .returns(Promise.resolve(oldData))

//             let failMess = 'Resolving wrong access'
//             return entity.validateUpdateRules(body, {user: editor})
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(401)
//                     entMock.verify()
//                 })
//         })

//         it('should resolve if everything is right', () => {

//             let editor = {
//                 id: 'editor',
//                 access: 'secondAccess'
//             }

//             let body = {
//                 id: 'edit-user',
//                 firstName: 'user-name'
//             }

//             let oldData = {
//                 id: 'edit-user',
//                 access: 'firstAccess'
//             }

//             let entity = new Entity(deps)

//             let entMock = sinon.mock(entity)
//             entMock.expects('fetchOne')
//                 .once()
//                 .withArgs('edit-user')
//                 .returns(Promise.resolve(oldData))

//             return entity.validateUpdateRules(body, {user: editor})
//                 .then(result => {
//                     expect(result).to.eql(body)
//                 })
//         })

//         it('should resolve if editor access is the same from user IF the user is the editor', () => {

//             let editor = {
//                 id: 'editor',
//                 access: 'firstAccess'
//             }

//             let body = {
//                 id: 'edit-user',
//                 firstName: 'user-name'
//             }

//             let oldData = {
//                 id: 'editor',
//                 access: 'firstAccess'
//             }

//             let entity = new Entity(deps)

//             let entMock = sinon.mock(entity)
//             entMock.expects('fetchOne')
//                 .once()
//                 .withArgs('edit-user')
//                 .returns(Promise.resolve(oldData))

//             return entity.validateUpdateRules(body, {user: editor})
//                 .then(result => {
//                     expect(result).to.eql(body)
//                 })
//         })

//     })

//     describe('update method', () => {

//         it('should call update adapter method', () => {
//             let expectedResult = {
//                 expected: 'data',
//                 from: 'update'
//             }

//             let expectedParams = {
//                 body: 'received',
//                 images: [ 'img1', 'img2', 'img3', 'img4', 'img5' ]
//             }

//             let body = {
//                 body: 'received',
//                 pictures: {
//                     id: 'test-imageid',
//                     images: [
//                         { img: 'img1', index: 0 },
//                         { img: 'img2', index: 1 },
//                         { img: 'img3', index: 2 },
//                         { img: 'img4', index: 3 },
//                         { img: 'img5', index: 4 },
//                     ]
//                 }
//             }

//             adpMock = sinon.mock(deps.Adapter.prototype)
//             adpMock.expects('update')
//                 .once()
//                 .withArgs(expectedParams)
//                 .returns(Promise.resolve(expectedResult))

//             let entity = new Entity(deps)
//             return entity.update(body)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                     adpMock.verify()
//                 })

//         })

//         it('should call update adapter method with body if pictures is not defined', () => {
//             let expectedResult = {
//                 expected: 'data',
//                 from: 'update'
//             }

//             let expectedParams = {
//                 body: 'received',
//             }

//             let body = {
//                 body: 'received',
//             }

//             adpMock = sinon.mock(deps.Adapter.prototype)
//             adpMock.expects('update')
//                 .once()
//                 .withArgs(expectedParams)
//                 .returns(Promise.resolve(expectedResult))

//             let entity = new Entity(deps)
//             return entity.update(body)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                     adpMock.verify()
//                 })

//         })

//     })

//     describe('validateDeleteBody method', () => {

//         it('should accept an id', () => {
//             let body = {
//                 id: 'test-id'
//             }

//             let entity = new Entity(deps)
//             return entity.validateDeleteBody(body)
//                 .then(result => {
//                     expect(result).to.eql(body)
//                 })
//         })

//         it('should reject with random parameter', () => {
//             let body = {
//                 id: 'test-id',
//                 random: 'param'
//             }

//             let failMess = 'Resolving with random param'
//             let entity = new Entity(deps)
//             return entity.validateDeleteBody(body)
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(400)
//                     expect(e.messages[0]).to.contain('"random"')
//                 })
//         })

//     })

//     describe('validateDeleteRules method', () => {

//         it('should reject if access is greater than editor access', () => {
//             let editor = {
//                 id: 'editor',
//                 access: 'firstAccess'
//             }

//             let body = {
//                 id: 'new-user',
//                 access: 'secondAccess'
//             }

//             let failMess = 'Resolving wrong access'
//             let entity = new Entity(deps)
//             return entity.validateDeleteRules(body, {user: editor})
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(401)
//                 })
//         })

//         it('should reject if editor access is minor than user', () => {

//             let editor = {
//                 id: 'editor',
//                 access: 'firstAccess'
//             }

//             let body = {
//                 id: 'edit-user',
//                 firstName: 'user-name'
//             }

//             let oldData = {
//                 id: 'edit-user',
//                 access: 'secondAccess'
//             }

//             let entity = new Entity(deps)

//             let entMock = sinon.mock(entity)
//             entMock.expects('fetchOne')
//                 .once()
//                 .withArgs('edit-user')
//                 .returns(Promise.resolve(oldData))

//             let failMess = 'Resolving wrong access'
//             return entity.validateDeleteRules(body, {user: editor})
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(401)
//                     entMock.verify()
//                 })
//         })

//         it('should reject if editor access is equal than user', () => {

//             let editor = {
//                 id: 'editor',
//                 access: 'firstAccess'
//             }

//             let body = {
//                 id: 'edit-user',
//                 firstName: 'user-name'
//             }

//             let oldData = {
//                 id: 'edit-user',
//                 access: 'firstAccess'
//             }

//             let entity = new Entity(deps)

//             let entMock = sinon.mock(entity)
//             entMock.expects('fetchOne')
//                 .once()
//                 .withArgs('edit-user')
//                 .returns(Promise.resolve(oldData))

//             let failMess = 'Resolving wrong access'
//             return entity.validateDeleteRules(body, {user: editor})
//                 .then(() => {
//                     expect().fail(failMess)
//                 })
//                 .catch(e => {
//                     if(e && e.message == failMess) expect().fail(failMess)
//                     expect(e.status).to.eql(401)
//                     entMock.verify()
//                 })
//         })

//         it('should resolve if everything is right', () => {

//             let editor = {
//                 id: 'editor',
//                 access: 'secondAccess'
//             }

//             let body = {
//                 id: 'edit-user',
//                 firstName: 'user-name'
//             }

//             let oldData = {
//                 id: 'edit-user',
//                 access: 'firstAccess'
//             }

//             let entity = new Entity(deps)

//             let entMock = sinon.mock(entity)
//             entMock.expects('fetchOne')
//                 .once()
//                 .withArgs('edit-user')
//                 .returns(Promise.resolve(oldData))

//             return entity.validateDeleteRules(body, {user: editor})
//                 .then(result => {
//                     expect(result).to.eql(body)
//                 })
//         })

//         it('should resolve if editor access is the same from user IF the user is the editor', () => {

//             let editor = {
//                 id: 'editor',
//                 access: 'firstAccess'
//             }

//             let body = {
//                 id: 'edit-user',
//                 firstName: 'user-name'
//             }

//             let oldData = {
//                 id: 'editor',
//                 access: 'firstAccess'
//             }

//             let entity = new Entity(deps)

//             let entMock = sinon.mock(entity)
//             entMock.expects('fetchOne')
//                 .once()
//                 .withArgs('edit-user')
//                 .returns(Promise.resolve(oldData))

//             return entity.validateDeleteRules(body, {user: editor})
//                 .then(result => {
//                     expect(result).to.eql(body)
//                 })
//         })

//     })

//     describe('delete method', () => {

//         it('should call delete adapter method', () => {
//             let expectedResult = {
//                 expected: 'data',
//                 from: 'delete'
//             }

//             let body = {
//                 body: 'data'
//             }

//             adpMock = sinon.mock(deps.Adapter.prototype)
//             adpMock.expects('delete')
//                 .once()
//                 .withArgs(body)
//                 .returns(Promise.resolve(expectedResult))

//             let entity = new Entity(deps)
//             return entity.delete(body)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                     adpMock.verify()
//                 })

//         })

//     })

//     describe('validateUpdateLastAccessBody method', () => {

//         it('should accept an id result with lastAccess', () => {
//             let expectedResult = {
//                 id: 'test-id',
//                 lastAccess: '2017-05-01T12:10:59.622'
//             }

//             let body = {
//                 id: 'test-id',
//             }

//             let entity = new Entity(deps)
//             return entity.validateUpdateLastAccessBody(body)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                 })
//         })

//     })

//     describe('createModel method', () => {

//         it('should call adapters createModel', () => {

//             let expectedResult = {
//                 expected: 'data',
//                 from: 'createModel'
//             }

//             let body = {
//                 body: 'data'
//             }

//             adpMock = sinon.mock(deps.Adapter.prototype)
//             adpMock.expects('createModel')
//                 .once()
//                 .withArgs(body)
//                 .returns(Promise.resolve(expectedResult))

//             let entity = new Entity(deps)
//             return entity.createModel(body)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                     adpMock.verify()
//                 })

//         })

//     })

//     describe('_checkPassword method', () => {

//         it('should call bcrypt.compareSync and return its result', () => {
//             let entity = new Entity(deps)

//             let bcrMock = sinon.mock(entity.bcrypt)
//             bcrMock.expects('compareSync')
//                 .once()
//                 .withArgs('inf-password', 'password')
//                 .returns(true)

//             let result = entity._checkPassword('password', 'inf-password')
//             expect(result).to.be.ok()
//         })

//     })

//     describe('_generateToken method', () => {

//         it('should return a token with user data encoded as token and type Bearer', () => {
//             let expectedResult = {
//                 type: 'Bearer',
//                 token: 'some-token-generated-with-user-data'
//             }

//             let userInfo = {
//                 id: 'some-id',
//                 login: 'some-login',
//                 password: 'some-pass',
//                 other: 'params',
//             }

//             let userSafeData = {
//                 id: 'some-id',
//                 login: 'some-login',
//             }

//             let token = 'some-token-generated-with-user-data'

//             jwtMock = sinon.mock(deps.jwt)
//             jwtMock.expects('sign')
//                 .once()
//                 .withArgs(userSafeData, 'api-12345-secret')
//                 .returns(token)

//             let entity = new Entity(deps)
//             let result = entity._generateToken(userInfo)

//             jwtMock.verify()
//             expect(result).to.eql(expectedResult)
//         })

//     })

// })
