import supertest from 'supertest';
import mongoose from 'mongoose';
import { expect } from 'chai';
import server from '../../server';

const Usuario = mongoose.model('Usuario');
const Cliente = mongoose.model('Cliente');
const Token = mongoose.model('Token');

// TODO -- criar usuário administrador uma vez antes de todos os testes
// TODO -- limpar e criar um usuário antes de cada teste no contexto "O usuário informado existe"
// TODO -- certificar-se antes de cada teste do contexto "O usuário informado não existe" que nenhum outro usuário além do administrador existe

describe('GET /usuarios/:id_usuario', () => {
    let request;
    const clienteId = mongoose.Types.ObjectId();
    const tokenValue = "m4m8rF7B8aYsFX2cq0qqg2xzL5jMtxkRu6gSA9sdUGUuganR9rWMQTHGeUSc0rgYaQVom1Z67NW7WXbTkKZfF5W7tBzJ0qsYfmzwrclDjUUtwmcuSBhdkMG1iPPoo4VdryCRxNMhmwRMF2n3aZBWOI1X5kqSoYr0XlgpL7rPMfyDQfZD6g0sN2PvPAq2i6djiwgI72zwQ7yaYEg13esYEXzalhqCTQlIw7MlyiFNI7p8HpZLf8eM1CflQi4APOA8";
    const testUser = {
        _id: mongoose.Types.ObjectId(),
        email: "usuarioteste@teste.com",
        nome: "Usuario Teste",
        senha: "123",
        perfis: ["administrador"],
        ativo: true
    }

    beforeEach(done => {
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
                var usuario = new Usuario(testUser);
                return usuario.save();
            })
            .then(() => {
                var token = new Token();
                token.value = tokenValue;
                token.clientId = clienteId;
                token.userId = testUser._id;

                return token.save();
            })
            .then(() => done());
    });

    context('O usuário informado existe', () => {
        // RFU01: POST /usuarios
        it('POST /usuarios', done => {
            const newUser = {
                _id: mongoose.Types.ObjectId(),
                email: "newuser@teste.com",
                nome: "New User",
                senha: "123",
                perfis: ["administrador"],
                ativo: true
            }

            request = supertest(server)
                .post('/usuarios')
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + tokenValue)
                .send(newUser)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body._id).to.equal(newUser._id.toString());
                    expect(res.body.email).to.equal(newUser.email);
                    expect(res.body.nome).to.equal(newUser.nome);
                    expect(res.body.perfis).to.have.same.members(newUser.perfis);
                    expect(res.body.ativo).to.equal(newUser.ativo);

                    // remove usuário criado para neste teste
                    Usuario
                        .remove({ _id: newUser._id })
                        .then(() => { done() })
                });
        });

        // RFU02: GET /usuarios
        it('GET /usuarios', done => {
            request = supertest(server)
                .get('/usuarios')
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + tokenValue)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.an('array');
                    expect(res.body.length).to.equal(1);
                    done();
                });
        });

        // RFU03: GET /usuarios/{id_usuario}
        it('GET /usuarios/{id_usuario}', done => {
            request = supertest(server)
                .get(`/usuarios/${testUser._id}`)
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + tokenValue)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body._id).to.equal(testUser._id.toString());
                    expect(res.body.email).to.equal(testUser.email);
                    expect(res.body.nome).to.equal(testUser.nome);
                    expect(res.body.perfis).to.have.same.members(testUser.perfis);
                    expect(res.body.ativo).to.equal(testUser.ativo);
                    done();
                });
        });

        // RFU04: PUT /usuarios/{id_usuario}
        it('PUT /usuarios/{id_usuario}', done => {
            const updatedTestUser = {
                email: "updated_usuarioteste@teste.com",
                nome: "updated_Usuario Teste",
                senha: "updated_123",
                perfis: ["interessado"],
                ativo: false,
            }

            request = supertest(server)
                .put(`/usuarios/${testUser._id}`)
                .send(updatedTestUser)
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + tokenValue)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body._id).to.equal(testUser._id.toString());
                    expect(res.body.email).to.equal(updatedTestUser.email);
                    expect(res.body.nome).to.equal(updatedTestUser.nome);
                    expect(res.body.perfis).to.have.same.members(updatedTestUser.perfis);
                    expect(res.body.ativo).to.equal(updatedTestUser.ativo);
                    done();
                });
        });

        // RFU05: DELETE /usuarios/{id_usuario}
        it('DELETE /usuarios/{id_usuario}', done => {
            request = supertest(server)
                .delete(`/usuarios/${testUser._id}`)
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + tokenValue)
                .end((err, res) => {
                    expect(res.status).to.equal(200);

                    Usuario
                        .find({ _id: testUser._id }, user => {
                            expect(user).to.be.null;
                            done()
                        });
                });
        });

        // RFU06: GET /usuarios/{id_usuario}/perfis 
         it('GET /usuarios/{id_usuario}/perfis', done => {
            request = supertest(server)
                .get(`/usuarios/${testUser._id}/perfis`)
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + tokenValue)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.perfis).to.have.same.members(testUser.perfis);
                    done();
                });
        });

        // RFU07: PUT /usuarios/{id_usuario}/perfis
        it('PUT /usuarios/{id_usuario}/perfis', done => {
            const updatedPerfis = { "perfis": ["administrador", "interessado"] };

            request = supertest(server)
                .put(`/usuarios/${testUser._id}/perfis`)
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + tokenValue)
                .send(updatedPerfis)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.perfis).to.have.same.members(updatedPerfis.perfis);
                    done();
                });
        });
    });

    context('O usuário informado não existe', () => {
        const nonExistingId = mongoose.Types.ObjectId();

        it('GET /usuarios/{id_usuario}', done => {
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
});