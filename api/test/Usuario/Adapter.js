// import expect from 'expect.js'
// import sinon from 'sinon'
// import { Adapter } from '../../src/Users'

// describe('Users Adapter', () => {

//     let deps = {
//         Database: class {
//             fetchAll() {}
//             fetch() {}
//             save() {}
//             update() {}
//             delete() {}
//         },
//         http: () => {},
//         config: {
//             facialSystem: {
//                 url: 'http://test-url.com'
//             }
//         }
//     }

//     let dbMock = null
//     let httpMock = null
//     afterEach(() => {
//         if(dbMock && dbMock.restore) dbMock.restore()
//         if(httpMock && httpMock.restore) httpMock.restore()
//     })

//     describe('fetchOne method', () => {

//         it('should call db fetchOne method', () => {

//             let expectedResult = {
//                 id: 'test-id',
//                 other: 'data'
//             }

//             let id = 'test-id'

//             dbMock = sinon.mock(deps.Database.prototype)
//             dbMock.expects('fetch')
//                 .once()
//                 .returns(Promise.resolve(expectedResult))

//             let adapter = new Adapter(deps)

//             return adapter.fetchOne(id)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                 })
//         })

//     })

//     describe('fetchAll method', () => {

//         it('should call db fetchAll method', () => {

//             let expectedResult = [
//                 { id: '1', login: '1', password: '1' },
//                 { id: '2', login: '2', password: '2' },
//                 { id: '3', login: '3', password: '3' },
//                 { id: '4', login: '4', password: '4' },
//             ]

//             dbMock = sinon.mock(deps.Database.prototype)
//             dbMock.expects('fetchAll')
//                 .once()
//                 .returns(Promise.resolve(expectedResult))

//             let adapter = new Adapter(deps)

//             return adapter.fetchAll()
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                 })
//         })

//     })

//     describe('save method', () => {

//         it('should call db save method', () => {

//             let expectedResult = {
//                 saved: 'data'
//             }

//             let body = {
//                 body: 'received'
//             }

//             dbMock = sinon.mock(deps.Database.prototype)
//             dbMock.expects('save')
//                 .once()
//                 .withArgs(body)
//                 .returns(Promise.resolve(expectedResult))

//             let adapter = new Adapter(deps)
//             return adapter.save(body)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                 })
//         })

//     })

//     describe('update method', () => {

//         it('should call database update method', () => {

//             let expectedResult = {
//                 saved: 'data'
//             }

//             let body = {
//                 body: 'received'
//             }

//             dbMock = sinon.mock(deps.Database.prototype)
//             dbMock.expects('update')
//                 .once()
//                 .withArgs(body)
//                 .returns(Promise.resolve(expectedResult))

//             let adapter = new Adapter(deps)
//             return adapter.update(body)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                 })
//         })

//     })

//     describe('delete method', () => {

//         it('should call database delete method', () => {

//             let expectedResult = {
//                 saved: 'data'
//             }

//             let body = {
//                 body: 'received'
//             }

//             dbMock = sinon.mock(deps.Database.prototype)
//             dbMock.expects('delete')
//                 .once()
//                 .withArgs(body)
//                 .returns(Promise.resolve(expectedResult))

//             let adapter = new Adapter(deps)
//             return adapter.delete(body)
//                 .then(result => {
//                     expect(result).to.eql(expectedResult)
//                 })
//         })

//     })

//     describe('createModel method', () => {

//         it('should call http POST with facialSystem url', () => {
//             let expectedParams = {
//                 url: 'http://test-url.com/persons',
//                 method: 'POST',
//                 data: {
//                     data: 'received'
//                 }
//             }

//             let body = {
//                 data: 'received'
//             }

//             let requestResult = {
//                 request: 'data'
//             }

//             httpMock = sinon.mock(deps)
//             httpMock.expects('http')
//                 .once()
//                 .withArgs(expectedParams)
//                 .returns(Promise.resolve(requestResult))

//             let adapter = new Adapter(deps)
//             return adapter.createModel(body)
//                 .then(result => {
//                     expect(result).to.eql(requestResult)
//                 })
//         })

//     })

// })
