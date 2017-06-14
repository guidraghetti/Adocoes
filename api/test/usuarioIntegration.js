import supertest from 'supertest';
import mongoose from 'mongoose';
import { expect } from 'chai';
import server from '../../server';

const Usuario = mongoose.model('Usuario');
const Cliente = mongoose.model('Cliente');
const Token = mongoose.model('Token');

describe('GET /usuarios/:id_usuario', () => {
    let request;
    const clienteId = mongoose.Types.ObjectId();
    const tokenValue = "m4m8rF7B8aYsFX2cq0qqg2xzL5jMtxkRu6gSA9sdUGUuganR9rWMQTHGeUSc0rgYaQVom1Z67NW7WXbTkKZfF5W7tBzJ0qsYfmzwrclDjUUtwmcuSBhdkMG1iPPoo4VdryCRxNMhmwRMF2n3aZBWOI1X5kqSoYr0XlgpL7rPMfyDQfZD6g0sN2PvPAq2i6djiwgI72zwQ7yaYEg13esYEXzalhqCTQlIw7MlyiFNI7p8HpZLf8eM1CflQi4APOA8";
    const usuarioTeste = {
        _id: mongoose.Types.ObjectId(),
        ativo: true,
        email: "usuarioteste@teste.com",
        nome: "Usuario Teste",
        senha: "123",
        perfis: ["administrador"]
    }

    // restaura banco de dados -- apaga tokens, clientes, usuarios e cria novos
    before(done => {
        Token
            .remove({})
            .then(() => Cliente.remove({}))
            .then(() => Usuario.remove({}))
            .then(() => {
                var cliente = new Cliente();
                cliente._id = clienteId;
                cliente.nome = "Cliente OAuht 2.0 Para Testes";
                cliente.secret = "$2a$05$M1COhDus0bY6rqkD2REl8.ZccrFgzFXH0a7sOEYU/FWYHTHJ.a8ZC";

                return cliente.save()
            })
            .then(() => {
                var usuario = new Usuario(usuarioTeste);
                return usuario.save();
            })
            .then(() => {
                var token = new Token();
                token.value = tokenValue;
                token.clientId = clienteId;
                token.userId = usuarioTeste._id;

                return token.save();
            })
            .then(() => done());
    });

    context('O usuário informado existe', () => {
        it('responde com dados do usuário e status HTTP 200', done => {
            request = supertest(server)
                .get(`/usuarios/${usuarioTeste._id}`)
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + tokenValue)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body._id).to.equal(usuarioTeste._id.toString());
                    expect(res.body.ativo).to.equal(usuarioTeste.ativo);
                    expect(res.body.email).to.equal(usuarioTeste.email);
                    expect(res.body.nome).to.equal(usuarioTeste.nome);
                    expect(res.body.perfis).to.have.same.members(usuarioTeste.perfis);
                    done();
                });
        });
    });

    context('O usuário informado não existe', () => {
        const nonExistingId = mongoose.Types.ObjectId();

        it('responde com status HTTP 404', done => {
            request = supertest(server)
                .get(`/usuarios/${nonExistingId}`)
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + tokenValue)
                .end((err, res) => {
                    expect(res.status).to.equal(404);
                    done();
                });
        });
    });

    context('Ocorreu um erro com alguma das camadas IATE', () => {
        it('ocorreu um erro com o Translator');
        it('ocorreu um erro com o Interactor');
        it('ocorreu um erro com o Entity');
        it('ocorreu um erro com o Adapter');
    });
});