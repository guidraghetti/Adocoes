import restify from 'restify'
import bodyParser from 'body-parser'

import UsuarioTranslator from './Usuario/Translator'
import ConteudoTranslator from './Conteudo/Translator'
import MenorTranslator from './Menor/Translator'
import InteressadosTranslator from './Interessado/Translator'

import AuthManager from './Auth/authManager'
import Oauth2Manager from './Auth/oauth2Manager'

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

// P0
// RFS01: POST /oauth
server.post('/oauth', AuthManager.isClientAuthenticated, Oauth2Manager.token);

//
// Resource: usuario
//

// P1
// RFU01: POST /usuarios
server.post('/usuarios', AuthManager.isAuthenticated, (request, response, next) => { 
    const usuarioTranslator = new UsuarioTranslator()
    usuarioTranslator.post(request, response)
})

// P1
// RFU02: GET /usuarios
server.get('/usuarios', AuthManager.isAuthenticated, (request, response, next) => {
    const usuarioTranslator = new UsuarioTranslator()
    usuarioTranslator.fetchAll(request, response)
})

// P0
// RFU03: GET /usuarios/{id_usuario}
server.get('/usuarios/:id_usuario', AuthManager.isAuthenticated, (request, response, next) => {
    const usuarioTranslator = new UsuarioTranslator()
    usuarioTranslator.getById(request, response)
})

// P1
// RFU04: PUT /usuarios/{id_usuario}
server.put('/usuarios/:id_usuario', AuthManager.isAuthenticated, (request, response, next) => {
    const usuarioTranslator = new UsuarioTranslator()
    usuarioTranslator.put(request, response)
})

// P1
// RFU05: DELETE /usuarios/{id_usuario}
server.del('/usuarios/:id_usuario', AuthManager.isAuthenticated, (request, response, next) => {
    const usuarioTranslator = new UsuarioTranslator()
    usuarioTranslator.delete(request, response)
})

// P1
// RFU06: GET /usuarios/{id_usuario}/perfis 
server.get('/usuarios/:id_usuario/perfis', AuthManager.isAuthenticated, (request, response, next) => {
    const usuarioTranslator = new UsuarioTranslator()
    usuarioTranslator.getPerfilByUsuarioId(request, response)
})

// P1
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

// P1
// RFM01: POST /menores
server.post('/menores', AuthManager.isAuthenticated, (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.post(request, response)
})

// P0
// RFM02: GET /menores
server.get('/menores', AuthManager.isAuthenticated, (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.getAllMenores(request, response)
})

// P0
// RFM03: GET /menores/{id_menor}
server.get('/menores/:id_menor', AuthManager.isAuthenticated, (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.getMenor(request, response)
})

// P1
// RFM04: PUT /menores/{id_menor}
server.put('/menores/:id_menor', AuthManager.isAuthenticated, (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.updateMenor(request, response)
})

// P1
// RFM05: DELETE /menores/{id_menor}
server.del('/menores/:id_menor', AuthManager.isAuthenticated, (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.deleteMenor(request, response)
})

// P0
// RFM06: GET /menores?ordenacao={idade=0~1, sexo=0~1}
server.get('/menores?idade=:idade, sexo=:sexo', AuthManager.isAuthenticated, (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.getMenoresByOrder(request, response)
})

// P0
// RFM07: POST /menores/{id_menor}/interessados
server.post('/menores/:id_menor/interessados', AuthManager.isAuthenticated, (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.postInteressado(request, response)
})

// P1
// RFM08: GET /menores/{id_menor}/interessados
server.get('/menores/:id_menor/interessados', AuthManager.isAuthenticated, (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.getInteressado(request, response)
})

// P1
// RFM09: DELETE /menores/{id_menor}/interessados/{id_interessado}
server.del('/menores/:id_menor/interessados', AuthManager.isAuthenticated, (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.deleteInteressado(request, response)
})

// P1
// RFM10: POST /menores/{id_menor}/midias
server.post('/menores/:id_menor/midias', AuthManager.isAuthenticated, (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.postMidia(request, response)
})

// P0
// RFM11: GET /menores/{id_menor}/midias
server.get('/menores/:id_menor/midias', AuthManager.isAuthenticated, (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.getAllImagens(request, response)
})

// P0
// RFM12: GET /menores/{id_menor}/midias/{id_imagem}
server.get('/menores/:id_menor/midias/:id_imagem', AuthManager.isAuthenticated, (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.getImagemById(request, response)
})

// P1
// RFM13: DELETE /menores/{id_menor}/midias/{id_imagem}
server.del('/menores/:id_menor/midias/:id_imagem', AuthManager.isAuthenticated, (request, response, next) => {
    const menorTranslator = new MenorTranslator()
    menorTranslator.deleteImagem(request, response)
})

// RFM18 (2017-2): PUT /menores/{id_menor} (seta o id_abrigo)
// RFM09 (2017-2): POST /menores/{id_menor}/processos
// RFM20 (2017-2): GET /menores/{id_menor}/processos
// RFM21 (2017-2): GET /menores/{id_menor}/processos/{id_processo}
// RFM22 (2017-2): DELETE /menores/{id_menor}/processos/{id_processo}

//    
// Resource: interessado
//

// P1
// RFI01: POST /interessados
server.post('/interessados', (request, response, next) => {
    const interessadosTranslator = new InteressadosTranslator()
    interessadosTranslator.postInteressado(request, response)
})

// P0
// RFI02: GET /interessados
server.get('/interessados', (request, response, next) => {
    const interessadosTranslator = new InteressadosTranslator()
    interessadosTranslator.getAllInteressados(request, response)
})

// P1
// RFI12: GET /interessados?query=id_menor={id_menor}
//verificar este metodo
server.del('/conteudos/:id_conteudo/videos/:id_video', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.getInteressadosMenor(request, response)
})

// P0
// RFI03: GET /interessados/{id_interessado}
server.get('/interessados/:id_interessado', (request, response, next) => {
    const interessadosTranslator = new InteressadosTranslator()
    interessadosTranslator.getInteressado(request, response)
})

// P0
// RFI04: PUT /interessados/{id_interessado}
server.put('/interessados/:id_interessado', (request, response, next) => {
    const interessadosTranslator = new InteressadosTranslator()
    interessadosTranslator.updateInteressado(request, response)
})

// P1
// RFI05: DELETE /interessados/{id_interessado}
server.del('/interessados/:id_interessado', (request, response, next) => {
    let interessadosTranslator = new InteressadosTranslator()
    interessadosTranslator.deleteInteressado(request, response)
})

// DEPRECATED - EXCLUIR
// RFI07: GET /interessados/{id_interessado}/ordenacao
server.get('/conteudos/:id_interessado/ordenacao', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.getInteressadoByOrder(request, response)
})

// DEPRECATED - EXCLUIR
// RFI08: PUT /interessados/{id_interessado}/ordenacao
server.put('/conteudos/:id_interessado/ordenacao', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.updateInteressadoByOrder(request, response)
})

// P0
// RFI09: POST /interessados/{id_interessado}/visualizacoes
server.post('/interessados/:id_interessado/visualizacoes', (request, response, next) => {
    const interessadosTranslator = new InteressadosTranslator()
    interessadosTranslator.postVisualizacao(request, response)
})

// P0
// RFI10: GET /interessados/{id_interessado}/visualizacoes
server.get('/conteudos/:id_interessado/visualizacoes', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.getVisualizacoes(request, response)
})

// P0
// RFI11: PUT /interessados/{id_interessado}/visualizacoes
server.put('/interessados/:id_interessado/visualizacoes', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.updateVisualizacoes(request, response)
})

// P0
// RFI13: POST /interessados/{id_interessado}/menores
server.post('/conteudos/:id_interessado/menores', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.postMenor(request, response)
})

// P0
// RFI14: GET /interessados/{id_interessado}/menores
server.get('/conteudos/:id_interessado/menores', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.getMenor(request, response)
})

// P0
// RFI15: DELETE /interessados/{id_interessado}/menores/{id_menor}
server.del('/conteudos/:id_conteudo/videos/:id_video', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.deleteVideo(request, response)
})

// RFI16 (2017-2): POST /interessados/{id_interessado}/menores/{id_menor}/compartilhamentos
// RFI17 (2017-2): GET /interessados/{id_interessado}/mensagens
// RFI18 (2017-2): PUT /usuarios/{id_usuario}/mensagens
// RFI19 (2017-2): POST /interessados/{id_interessado}/documentos
// RFI20 (2017-2): GET /interessados/{id_interessado}/documentos
// RFI21 (2017-2): GET /interessados/{id_interessado}/documentos/{id_documento}

//
//resource: Conteudos
//

// P1
// RFC01: POST /conteudos
server.post('/conteudos', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.post(request, response)
})

// P0
// RFC02: GET /conteudos
server.get('/conteudos', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.get(request, response)
})

// P1
// RFC03: PUT /conteudos/{id_conteudo}
// @eduardo.arruda: a rota correta é /conteudos/:id
server.put('/conteudos/:id_conteudo', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.put(request, response)
})

// P1
// RFC04: DELETE /conteudos/{id_conteudo}
server.del('/conteudos/:id', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.delete(request, response)
})

// P1
// RFC05: POST /conteudos/{id_conteudo}/midias
server.post('/conteudos/:id_conteudo/imagens', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.postImages(request, response)
})

// P0
// RFC06: GET /conteudos/{id_conteudo}/midias
server.get('/conteudos/:id_conteudo/imagens', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.fetchImages(request, response)
})

// P0
// RFC07: GET /conteudos/{id_conteudo}/midias/{id_midia}
server.get('/conteudos/:id_conteudo/imagens/:id_imagem', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.delete(request, response)
})

// P1
// RFC08: DELETE /conteudos/{id_conteudo}/midias/{id_midia}
server.del('/conteudos/:id_conteudo/imagens/:id_imagem', (request, response, next) => {
    const conteudoTranslator = new ConteudoTranslator()
    conteudoTranslator.delete(request, response)
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
// RFO08 (2017-2): DELETE /processos/{id_processo}/movimentos/{id_movimento}
// Resource: conteudo

server.listen(port, function () {
    console.log('Adoções API executando na porta: ' + port)
})

module.exports = server;
