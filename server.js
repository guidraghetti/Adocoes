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

server.pre(restify.pre.sanitizePath());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));

server.get('/', function (req, res, next) {
    const moment = require('moment')
    let now = moment()
    console.log(req.headers)
    res.json(200, {
        status: 200,
        now: now.toString(),
        unix_now: now.unix()
    })
})

//
// Resource: token
//

//RFS01: POST /oauth
server.post('/oauth', AuthManager.isClientAuthenticated, Oauth2Manager.token);

//
// Resource: usuario
//

// RFU01: POST /usuarios
server.post('/usuarios', AuthManager.isAuthenticated, (request, response, next) => { 
    const usuarioTranslator = new UsuarioTranslator()
    usuarioTranslator.post(request, response)
})

// RFU02: GET /usuarios
server.get('/usuarios', AuthManager.isAuthenticated, (request, response, next) => {
    const usuarioTranslator = new UsuarioTranslator()
    usuarioTranslator.get(request, response)
})

// RFU03: GET /usuarios/{id_usuario}
server.get('/usuarios/:id_usuario', AuthManager.isAuthenticated, (request, response, next) => {
    const usuarioTranslator = new UsuarioTranslator()
    usuarioTranslator.getById(request, response)
})

// RFU04: PUT /usuarios/{id_usuario}
server.put('/usuarios/:id_usuario', AuthManager.isAuthenticated, (request, response, next) => {
    const usuarioTranslator = new UsuarioTranslator()
    usuarioTranslator.put(request, response)
})

// RFU05: DELETE /usuarios/{id_usuario}
server.del('/usuarios/:id_usuario', AuthManager.isAuthenticated, (request, response, next) => {
    const usuarioTranslator = new UsuarioTranslator()
    usuarioTranslator.delete(request, response)
})

// RFU06: GET /usuarios/{id_usuario}/perfis 
server.get('/usuarios/:id_usuario/perfis', AuthManager.isAuthenticated, (request, response, next) => {
    const usuarioTranslator = new UsuarioTranslator()
    usuarioTranslator.getPerfilByUsuarioId(request, response)
})

// RFU09: PUT /usuarios/{id_usuario}/perfis
server.put('/usuarios/:id_usuario/perfis', AuthManager.isAuthenticated, (request, response, next) => {
    const usuarioTranslator = new UsuarioTranslator()
    usuarioTranslator.updatePerfilUsuario(request, response)
})

//
// Resource: perfil
//

// RFP01 (2017-2): POST /perfis
// RFP02 (2017-2): GET /perfis
// RFP03 (2017-2): GET /perfis/{id_perfil}
// RFP04 (2017-2): PUT /perfis/{id_perfil}
// RFP05 (2017-2): DELETE /perfis/{id_perfil}
// RFP06 (2017-2): GET /perfis/{id_perfil}/usuarios
// RFP07 (2017-2): POST /perfis/{id_perfil}/usuarios
// RFP08 (2017-2): DELETE /perfis/{id_perfil}/usuarios/{id_usuario}

//
// Resource: menor
//

// RFM01: POST /menores
server.post('/menores', AuthManager.isAuthenticated, (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.post(request, response)
})

// RFM02: GET /menores
server.get('/menores', AuthManager.isAuthenticated, (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.get(request, response)
})

// RFM03: GET /menores/{id_menor}
// RFM04: PUT /menores/{id_menor}
// RFM05: DELETE /menores/{id_menor}
// RFM06: GET /menores/ordenacao
// RFM07: POST /menores/{id_menor}/interessados
// RFM08: GET /menores/{id_menor}/interessados
// RFM09: DELETE /menores/{id_menor}/interessados/{id_interessado}
// RFM10: POST /menores/{id_menor}/imagens
// RFM11: GET /menores/{id_menor}/imagens
// RFM12: GET /menores/{id_menor}/imagens/{id_imagem}
// RFM13: DELETE /menores/{id_menor}/imagens/{id_imagem}
// RFM14: POST /menores/{id_menor}/videos
// RFM15: GET /menores/{id_menor}/videos
// RFM16: GET /menores/{id_menor}/videos/{id_video}
// RFM17: DELETE /menores/{id_menor}/videos/{id_video}

// RFM18 (2017-2): PUT /menores/{id_menor} (seta o id_abrigo)
// RFM09 (2017-2): POST /menores/{id_menor}/processos
// RFM20 (2017-2): GET /menores/{id_menor}/processos
// RFM21 (2017-2): GET /menores/{id_menor}/processos/{id_processo}
// RFM22 (2017-2): DELETE /menores/{id_menor}/processos/{id_processo}

// Resource: interessado

// RFI01: POST /interessados
server.post('/interessados', (request, response, next) => {
    const interessadosTranslator = new InteressadosTranslator()
    interessadosTranslator.post(request, response)
})

// RFI02: GET /interessados
server.get('/interessados', (request, response, next) => {
    const interessadosTranslator = new InteressadosTranslator()
    interessadosTranslator.get(request, response)
})

// RFI12: GET /interessados?query=id_menor={id_menor}

// RFI03: GET /interessados/{id_interessado}
server.get('/interessados/:id', (request, response, next) => {
    const interessadosTranslator = new InteressadosTranslator()
    interessadosTranslator.getInteressado(request, response)
})

// RFI04: PUT /interessados/{id_interessado}
server.put('/interessados/:id', (request, response, next) => {
    const interessadosTranslator = new InteressadosTranslator()
    interessadosTranslator.put(request, response)
})

// RFI05: DELETE /interessados/{id_interessado}
server.del('/interessados/:id', (request, response, next) => {
    let interessadosTranslator = new InteressadosTranslator()
    interessadosTranslator.delete(request, response)
})

// RFI07: GET /interessados/{id_interessado}/ordenacao
// RFI08: PUT /interessados/{id_interessado}/ordenacao

// RFI09: POST /interessados/{id_interessado}/visualizacoes
server.post('/interessados/:id/visualizacoes', (request, response, next) => {
    const interessadosTranslator = new InteressadosTranslator()
    interessadosTranslator.post(request, response)
})

// RFI10: GET /interessados/{id_interessado}/visualizacoes

// RFI11: PUT /interessados/{id_interessado}/visualizacoes

// RFI13: POST /interessados/{id_interessado}/menores
// RFI14: GET /interessados/{id_interessado}/menores
// RFI15: DELETE /interessados/{id_interessado}/menores/{id_menor}

// RFI16 (2017-2): POST /interessados/{id_interessado}/menores/{id_menor}/compartilhamentos
// RFI17 (2017-2): GET /interessados/{id_interessado}/mensagens
// RFI18 (2017-2): PUT /usuarios/{id_usuario}/mensagens
// RFI19 (2017-2): POST /interessados/{id_interessado}/documentos
// RFI20 (2017-2): GET /interessados/{id_interessado}/documentos
// RFI21 (2017-2): GET /interessados/{id_interessado}/documentos/{id_documento}

// RFC01: POST /conteudos
server.post('/conteudos', (request, response, next) => {
    let conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.post(request, response)
})

// RFC02: GET /conteudos
server.get('/conteudos', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.get(request, response)
})

// RFC03: PUT /conteudos/{id_conteudo}
// @eduardo.arruda: a rota correta é /conteudos/:id
server.put('/conteudos', (request, response, next) => {
    let conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.put(request, response)
})

// RFC04: DELETE /conteudos/{id_conteudo}
server.del('/conteudos/:id', (request, response, next) => {
    let conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.delete(request, response)
})

// RFC05: POST /conteudos/{id_conteudo}/imagens
server.post('/conteudos/:id/imagens', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.postImages(request, response)
})

// RFC06: GET /conteudos/{id_conteudo}/imagens
server.get('/conteudos/:id/imagens', (request, response, next) => {
    let conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.fetchImages(request, response)
})

// RFC07: GET /conteudos/{id_conteudo}/imagens/{id_imagem}

// RFC08: DELETE /conteudos/{id_conteudo}/imagens/{id_imagem}
server.del('/conteudos/:id/imagens/:imageId', (request, response, next) => {
    let conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.delete(request, response)
})

// RFC09: POST /conteudos/{id_conteudo}/videos
server.post('/conteudos/:id_conteudo/videos', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.postVideo(request, response)
})

// RFC10: GET /conteudos/{id_conteudo}/videos
server.get('/conteudos/:id_conteudo/videos', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.getAllVideos(request, response)
})

// RFC11: GET /conteudos/{id_conteudo}/videos/{id_video}
server.get('/conteudos/:id_conteudo/videos/:id_video', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.getVideo(request, response)
})

// RFC12: DELETE /conteudos/{id_conteudo}/videos/{id_video}
server.del('/conteudos/:id_conteudo/videos/:id_video', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.deleteVideo(request, response)
})

//
// Resource: mensagem
//

// RFM01 (2017-2): POST /mensagens
// RFM02 (2017-2): GET /mensagens
// RFM03 (2017-2): GET /mensagens?query=data_inicial={data_inicial}&data_final={data_final}
// RFM04 (2017-2): PUT /mensagens/{id_mensagem}
// RFM05 (2017-2): POST /mensagens/{id_mensagem}/resposta
// RFM06 (2017-2): DELETE /mensagens/{id_mensagem}

//
// Resource: abrigo
//

// RFA01 (2017-2): POST /abrigos
// RFA02 (2017-2): GET /abrigos
// RFA03 (2017-2): PUT /abrigos/{id_abrigo}
// RFA04 (2017-2): DELETE /abrigos/{id_abrigo}

//
// Resource: familia
//

// RFF01 (2017-2): POST /familias
// RFF02 (2017-2): GET /familias
// RFF03 (2017-2): PUT /familias/{id_familia}
// RFF04 (2017-2): DELETE /familias/{id_familia}

//
// Resource: processo
//

// RFO01 (2017-2): POST /processos
// RFO02 (2017-2): GET /processos
// RFO03 (2017-2): PUT /processos/{id_processo}
// RFO04 (2017-2): DELETE /processos/{id_processo}
// RFO05 (2017-2): POST /processos/{id_processo}/movimentos
// RFO06 (2017-2): GET /processos/{id_processo}/movimentos
// RFO07 (2017-2): PUT /processos/{id_processo}/movimentos/{id_movimento}
// RFO08 (2017-2): DELETE /processos/{id_processo}/movimentos/{id_movimento}// Resource: conteudo

server.listen(port, function () {
    console.log('Adoções API running! Port: ' + port)
})
