import restify from 'restify'
import bodyParser from 'body-parser'
import ConteudoTranslator from './api/src/Conteudo/Translator'
import MenorTranslator from './api/src/Menor/Translator'

require('./database.js')

const server = restify.createServer()
const port = process.env.PORT || 8888

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
})); 

server.get('/', function(req, res, next) {
    const moment = require('moment')
    let now = moment()
    console.log(req.headers)
    res.json(200, {
        status: 200,
        now: now.toString(),
        unix_now: now.unix()
    })
})

server.post('/conteudos', (request, response, next) => {
	let conteudoTranslator = new ConteudoTranslator()
	conteudoTranslator.post(request, response)
})

server.get('/conteudos', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.get(request, response)

server.post('/conteudos/:id/imagens', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.postImages(request, response)
})

server.put('/conteudos', (request, response, next) => {
    let conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.put(request, response)
})

server.del('/conteudos/:id', (request, response, next) => {
    let conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.delete(request, response)
})

server.del('/conteudos/:id/imagens/:imageId', (request, response, next) => {
    let conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.delete(request, response)
})

server.post('/menores', (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.post(request, response)
})

server.get('/menores', (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.get(request, response)
})

server.listen(port, function() {
    console.log('Adoções API running! Port: ' + port)
})

