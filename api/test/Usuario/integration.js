// Test promises with Mocha - https://wietse.loves.engineering/testing-promises-with-mocha-90df8b7d2e35
// Mockgoose - https://www.npmjs.com/package/mockgoose

import Supertest from 'supertest';
import Mockgoose from 'mockgoose';
import Server from '../../../server';

describe('GET /usuarios/:id_usuario', () => {
    var request;

    before(() => {
        // TODO - banco de testes
        process.env.ENV_DB_NAME = 'AdocoesTest';
        
        // TODO - configurar cabeçalho 'Bearer' (Obs: autenticação removida temporariamente de 'GET /usuarios/:id_usuario')
    })

    beforeEach(() => {
        // TODO - utilizar dados pré-configurados
        const userId = "593b2e5d80538c0709efb73c";

        request = Supertest(Server)
            .get(`/usuarios/${userId}`)
            .set("Content-Type", "application/json");
    });

    context('O usuário informado existe', () => {
        it('responde com dados do usuário e status HTTP 200', done => {
            request
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