// Test promises with Mocha - https://wietse.loves.engineering/testing-promises-with-mocha-90df8b7d2e35
// Mockgoose - https://www.npmjs.com/package/mockgoose


import Supertest from 'supertest';
// import { Mongoose } from 'mongoose';
// import { Mockgoose } from 'mockgoose';

// import Cliente from '../../../api/src/Model/Auth/cliente';
// import Token from '../../../api/src/Model/Auth/token';
// import Usuario from '../../../api/src/Model/usuario';
import Server from '../../../server';

// const mongoose = new Mongoose();
// const mockgoose = new Mockgoose(mongoose);

describe('GET /usuarios/:id_usuario', () => {
    let request;

    // before(done => {
    //     // banco de testes
    //     mockgoose.prepareStorage().then(() => {
    //         mongoose.connect('mongodb://localhost:27017/AdocoesTest', err => {
    //             done(err);
    //         });

    //         mongoose.connection.on('connected', () => {  
    //             console.log('Banco de testes disponível');
    //         });
    //     });

    //     // TODO - cabeçalhos padrão
    //     // TODO - cabeçalho 'Bearer' (Obs: autenticação removida temporariamente de 'GET /usuarios/:id_usuario')
    // });

    context('O usuário informado existe', () => {
        // before(done => {
        //     // cria novo usuário
        //     var usuario = new Usuario();      
        //     usuario.email = "usuarioteste@teste.com";
        //     usuario.nome = "Usuario Teste";
        //     usuario.senha = "123",
        //     usuario.perfis = "administrador";

        //     usuario
        //         .save()
        //         .then(() => done());
        // });

        it('responde com dados do usuário e status HTTP 200', done => {
             request = Supertest(Server)
                .get('/usuarios/593c1c56e97b0f0f9492305b')
                .set("Content-Type", "application/json")
                .expect(200)
                .then(() => done())
        });
    });

    context('O usuário informado não existe', () => {
        it('responde com status HTTP 404');
    });

    context('Ocorreu um erro com alguma das camadas IATE', () => {
        it('responde com status HTTP 500');
    });
});