// Test promises with Mocha - https://wietse.loves.engineering/testing-promises-with-mocha-90df8b7d2e35
// Mockgoose - https://www.npmjs.com/package/mockgoose
// https://stackoverflow.com/questions/31030732/testing-admin-user-on-mocha

import supertest from 'supertest';
import mongoose from 'mongoose';

// import { Mongoose } from 'mongoose';
// import { Mockgoose } from 'mockgoose';

// import Cliente from '../../../api/src/Model/Auth/cliente';
// import Token from '../../../api/src/Model/Auth/token';
// import Usuario from '../../../api/src/Model/usuario';

// const mongoose = new Mongoose();
// const mockgoose = new Mockgoose(mongoose);

// import Server from '../../../server';

describe('GET /usuarios/:id_usuario', () => {    
    let server;
    let request;
    let Usuario;
    let Cliente;
    let Token;

    const clienteId = mongoose.Types.ObjectId();

    before(done => {
        server = require('../../server');
        
        Usuario = mongoose.model('Usuario');
        Cliente = mongoose.model('Cliente');
        Token = mongoose.model('Token');

        Cliente.remove({}, ()=> {
            var cliente = new Cliente(); 
            cliente._id =  clienteId;
            cliente.nome = "Cliente OAuht 2.0 Para Testes";
            cliente.secret = "$2a$05$M1COhDus0bY6rqkD2REl8.ZccrFgzFXH0a7sOEYU/FWYHTHJ.a8ZC";

            cliente
                .save()
                .then(() => done());
        });
    });

    context('O usuário informado existe', () => {
        const usuarioId = mongoose.Types.ObjectId();
        const tokenValue = "m4m8rF7B8aYsFX2cq0qqg2xzL5jMtxkRu6gSA9sdUGUuganR9rWMQTHGeUSc0rgYaQVom1Z67NW7WXbTkKZfF5W7tBzJ0qsYfmzwrclDjUUtwmcuSBhdkMG1iPPoo4VdryCRxNMhmwRMF2n3aZBWOI1X5kqSoYr0XlgpL7rPMfyDQfZD6g0sN2PvPAq2i6djiwgI72zwQ7yaYEg13esYEXzalhqCTQlIw7MlyiFNI7p8HpZLf8eM1CflQi4APOA8";

        before(done => {
            Usuario.remove({}, ()=> {
                var usuario = new Usuario();     
                usuario._id = usuarioId; 
                usuario.email = "usuarioteste@teste.com";
                usuario.nome = "Usuario Teste";
                usuario.senha = "123",
                usuario.perfis = "administrador";

                usuario
                    .save(() => {
                        var token = new Token();
                        token.value = tokenValue,
                        token.clientId = clienteId;
                        token.userId = usuarioId

                        token
                            .save()
                            .then(() => done());
                    });
            });
        });

        it('responde com dados do usuário e status HTTP 200', done => {
             request = supertest(server)
                .get(`/usuarios/${usuarioId}`)
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + tokenValue)
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