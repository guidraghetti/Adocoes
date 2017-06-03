import restify from 'restify'
import bodyParser from 'body-parser'

import UsuarioTranslator from './api/src/Usuario/Translator'
import ConteudoTranslator from './api/src/Conteudo/Translator'
import MenorTranslator from './api/src/Menor/Translator'
import InteressadosTranslator from './api/src/Interessado/Translator'

import AuthManager from './api/src/Auth/authManager'
import Oauth2Manager from './api/src/Auth/oauth2Manager'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

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
})

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

server.post('/conteudos/:id_conteudo/videos', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.postVideo(request, response)
})

server.get('/conteudos/:id_conteudo/videos', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.getAllVideos(request, response)
})

server.get('/conteudos/:id_conteudo/videos/:id_video', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.getVideo(request, response)
})

server.del('/conteudos/:id_conteudo/videos/:id_video', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.deleteVideo(request, response)
})

server.post('/menores', AuthManager.isAuthenticated, (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.post(request, response)
})

server.post('/interessados', (request, response, next) => {
    const interessadosTranslator = new InteressadosTranslator()
    interessadosTranslator.post(request, response)
})

server.get('/menores', AuthManager.isAuthenticated, (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.get(request, response)
})

server.post('/usuarios', AuthManager.isAuthenticated, (request, response, next) => {
    const usuarioTranslator = new UsuarioTranslator()
    usuarioTranslator.post(request, response)
})

server.get('/usuarios', AuthManager.isAuthenticated, (request, response, next) => {
    const usuarioTranslator = new UsuarioTranslator()
    usuarioTranslator.get(request, response)
})

server.get('/usuarios/:id_usuario',  (request, response, next) => {
    const usuarioTranslator = new UsuarioTranslator()
    usuarioTranslator.getById(request, response)
})

server.put('/usuarios/:id_usuario', AuthManager.isAuthenticated, (request, response, next) => {
    const usuarioTranslator = new UsuarioTranslator()
    usuarioTranslator.put(request, response)
})

server.del('/usuarios/:id_usuario', AuthManager.isAuthenticated, (request, response, next) => {
    const usuarioTranslator = new UsuarioTranslator()
    usuarioTranslator.delete(request, response)
})

server.post('/oauth2/token', AuthManager.isClientAuthenticated, Oauth2Manager.token);

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
