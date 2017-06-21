import supertest from 'supertest';
import mongoose from 'mongoose';
import { expect } from 'chai';
import server from '../src/server';

const Usuario = mongoose.model('Usuario');
const Cliente = mongoose.model('Cliente');
const Token = mongoose.model('Token');

describe('GET /usuarios/:id_usuario', () => {
    const request = supertest(server);
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
        it('POST /usuarios', done => {
            const newUser = {
                _id: mongoose.Types.ObjectId(),
                email: "newuser@teste.com",
                nome: "New User",
                senha: "123",
                perfis: ["administrador"],
                ativo: true
            }

            request
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

        it('GET /usuarios', done => {
            request
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

        it('GET /usuarios/{id_usuario}', done => {
            request
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

        it('PUT /usuarios/{id_usuario}', done => {
            const updatedUserInfo = {
                email: "updated_usuarioteste@teste.com",
                nome: "updated_Usuario Teste",
                senha: "updated_123",
                perfis: ["interessado"],
                ativo: false,
            }

            request
                .put(`/usuarios/${testUser._id}`)
                .send(updatedUserInfo)
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + tokenValue)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body._id).to.equal(testUser._id.toString());
                    expect(res.body.email).to.equal(updatedUserInfo.email);
                    expect(res.body.nome).to.equal(updatedUserInfo.nome);
                    expect(res.body.perfis).to.have.same.members(updatedUserInfo.perfis);
                    expect(res.body.ativo).to.equal(updatedUserInfo.ativo);
                    done();
                });
        });

        it('DELETE /usuarios/{id_usuario}', done => {
            request
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

        it('GET /usuarios/{id_usuario}/perfis', done => {
            request
                .get(`/usuarios/${testUser._id}/perfis`)
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + tokenValue)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.perfis).to.have.same.members(testUser.perfis);
                    done();
                });
        });

        it('PUT /usuarios/{id_usuario}/perfis', done => {
            const updatedPerfis = { "perfis": ["administrador", "interessado"] };

            request
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
            request
                .get(`/usuarios/${nonExistingId}`)
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + tokenValue)
                .end((err, res) => {
                    expect(res.status).to.equal(404);
                    done();
                });
        });

        it('PUT /usuarios/{id_usuario}', done => {
            const updatedTestUser = {
                email: "updated_usuarioteste@teste.com",
                nome: "updated_Usuario Teste",
                senha: "updated_123",
                perfis: ["interessado"],
                ativo: false,
            }

            request
                .put(`/usuarios/${nonExistingId}`)
                .send(updatedTestUser)
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + tokenValue)
                .end((err, res) => {
                    expect(res.status).to.equal(400);
                    done();
                });
        });

        it('DELETE /usuarios/{id_usuario}', done => {
            request
                .delete(`/usuarios/${nonExistingId}`)
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + tokenValue)
                .end((err, res) => {
                    expect(res.status).to.equal(400);
                    done();
                });
        });

        it('GET /usuarios/{id_usuario}/perfis', done => {
            request
                .get(`/usuarios/${nonExistingId}/perfis`)
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + tokenValue)
                .end((err, res) => {
                    expect(res.status).to.equal(400);
                    done();
                });
        });

        it('PUT /usuarios/{id_usuario}/perfis', done => {
            const updatedPerfis = { "perfis": ["administrador", "interessado"] };

            request
                .put(`/usuarios/${nonExistingId}/perfis`)
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + tokenValue)
                .send(updatedPerfis)
                .end((err, res) => {
                    expect(res.status).to.equal(400);
                    done();
                });
        });
    });
});