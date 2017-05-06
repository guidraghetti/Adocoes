import restify from 'restify'
import bodyParser from 'body-parser'
import ConteudoTranslator from './api/src/Conteudo/Translator'

const server = restify.createServer()
const port = process.env.PORT || 8888

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
	console.log(request)
	conteudoTranslator = new ConteudoTranslator()
	conteudoTranslator.post(request, reponse)
})

server.listen(port, function() {
    console.log('Adoções API running! Port: ' + port)
})