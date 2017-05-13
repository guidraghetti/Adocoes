import restify from 'restify'
import bodyParser from 'body-parser'
import ConteudoTranslator from './api/src/Conteudo/Translator'
import MenorTranslator from './api/src/Menor/Translator'
import InteressadosTranslator from './api/src/Interessado/Translator'

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

server.post('/menores', (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.post(request, response)
})

server.post('/interessados', (request, response, next) => {
    const interessadosTranslator = new InteressadosTranslator()
    interessadosTranslator.post(request, response)
})


server.get('/menores', (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.get(request, response)
})

server.get('/interessados', (request, response, next) => {
    const interessadosTranslator = new InteressadosTranslator()
    interessadosTranslator.get(request, response)
})

server.del('/interessados/:id', (request, response, next) => {
	let interessadosTranslator = new InteressadosTranslator()
	interessadosTranslator.delete(request, response)
})

server.listen(port, function() {
    console.log('Adoções API running! Port: ' + port)
})

