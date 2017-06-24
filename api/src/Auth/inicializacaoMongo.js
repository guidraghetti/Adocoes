/*********** inicializa banco de dados 'Adocoes' ***********************************

Cria usuário administrador e cliente oauth 2.0:
 * Usuário (resource owner): email: "admin@adocoes.ages.pucrs.br", senha: "123"
 * Cliente OAuth 2.0: nome: "adocoes.app", secret: "407a4d80fce791751cd83ab1af3d9b26"

************************************************************************************/

use Adocoes

db.clientes.save({
    nome: "adocoes.app",
    secret: "$2a$05$rK1K/Vy0z/Kj5INVusw4eeA3M0UJTHmEx.U5w1k2WTWT78NeeAnrK" // "407a4d80fce791751cd83ab1af3d9b26"
});

db.usuarios.save({
    email: "admin@adocoes.ages.pucrs.br",
    senha: "$2a$05$M1COhDus0bY6rqkD2REl8.ZccrFgzFXH0a7sOEYU/FWYHTHJ.a8ZC", // "123"
    nome: "Administrador",
    perfis: "administrador",
	matricula: "1",
    ativo: true
});
