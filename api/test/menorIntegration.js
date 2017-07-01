import supertest from 'supertest';
import mongoose from 'mongoose';
import { expect } from 'chai';
import server from '../src/server';

const Usuario = mongoose.model('Usuario');
const Cliente = mongoose.model('Cliente');
const Token = mongoose.model('Token');
const Menor = mongoose.model('Menor');

describe('Testes integrados do resource menor', () => {
    const request = supertest(server);
    const clienteId = mongoose.Types.ObjectId();
    const tokenValue = "m4m8rF7B8aYsFX2cq0qqg2xzL5jMtxkRu6gSA9sdUGUuganR9rWMQTHGeUSc0rgYaQVom1Z67NW7WXbTkKZfF5W7tBzJ0qsYfmzwrclDjUUtwmcuSBhdkMG1iPPoo4VdryCRxNMhmwRMF2n3aZBWOI1X5kqSoYr0XlgpL7rPMfyDQfZD6g0sN2PvPAq2i6djiwgI72zwQ7yaYEg13esYEXzalhqCTQlIw7MlyiFNI7p8HpZLf8eM1CflQi4APOA8";
    const admin = {
        _id: mongoose.Types.ObjectId(),
        email: "usuarioteste@teste.com",
        nome: "Usuario Teste",
        senha: "123",
        perfis: ["administrador"],
        ativo: true
    }

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
                var usuario = new Usuario(admin);
                return usuario.save();
            })
            .then(() => {
                var token = new Token();
                token.value = tokenValue;
                token.clientId = clienteId;
                token.userId = admin._id;

                return token.save();
            })
            .then(() => done());
    });

    context('O menor informado existe', () => {
        // P1
        it('POST /menores', done => {
            const newMenor = {
                nome: "Nome do Menor",
                sexo: "Masculino",
                certidaoNascimento: "Certidão Nasc.",
                dataNascimento: "01/01/2017",
                refEtnia: null,
                familiares: null,
                menoresVinculados: null,
                adocoesConjuntas: null,
                saudavel: true,
                descricaoSaude: null,
                curavel: null,
                deficienciaFisica: false,
                deficienciaMental: false,
                guiaAcolhimento: null,
                refCidade: null,
                refAbrigo: null,
                processoPoderFamiliar: null,
                interesses: null,
                midias: null,
                visualizacoes: null,
                ativo: true
            }

            request
                .post('/menores')
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + tokenValue)
                .send(newMenor)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                   
                    // remove menor criado para este teste
                    Menor
                        .remove({ _id: newMenor._id })
                        .then(() => { done() })
                });
        }); 

        // P0
        it('GET /menores'); 

        // P0
        it('GET /menores/{id_menor}'); 

        // P1
        it('PUT /menores/{id_menor}'); 

        // P1
        it('DELETE /menores/{id_menor}'); 

        // P0
        it('GET /menores?ordenacao={idade=0~1, sexo=0~1}'); 

        // P1
        it('POST /menores/{id_menor}/interessados'); 

        // P1
        it('GET /menores/{id_menor}/interessados'); 

        // P1
        it('DELETE /menores/{id_menor}/interessados/{id_interessado}'); 
    });

    context('O usuário informado não existe', () => {
    });
});