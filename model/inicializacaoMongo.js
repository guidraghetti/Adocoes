/*********** inicializa banco de dados 'Adocoes' ***********************************

Cria usuário administrador e cliente oauth 2.0:
 * Usuário (resource owner): email: "eduardo.arruda@doc.space", senha: "123"
 * Cliente OAuth 2.0: nome: "adocoes.app", secret: "407a4d80fce791751cd83ab1af3d9b26"

************************************************************************************/

use Adocoes

db.usuarios.save({
    email: "eduardo.arruda@doc.space",
    senha: "$2a$05$M1COhDus0bY6rqkD2REl8.ZccrFgzFXH0a7sOEYU/FWYHTHJ.a8ZC", // "123"
    nome: "Eduardo Arruda",
    perfis: "administrador",
    refPerfilAdministrador: null,
    refPerfilInteressado: null,
    ativo: true
});

db.clientes.save({
    nome: "adocoes.app",
    secret: "$2a$05$rK1K/Vy0z/Kj5INVusw4eeA3M0UJTHmEx.U5w1k2WTWT78NeeAnrK" // "407a4d80fce791751cd83ab1af3d9b26"
});

db.interessados.save({
	name: "blablabla",
	cpf: "12345687901",
	nomeConjuge: "maria",
	email: "teste@gmail.com",
	dataNascimento: "21-12-1991",
	renda: "10000",
	comprovantesRenda: null,
	outrosDocumentos: null,
	enderecos: "rua das carmelias, 435",
	telefones: "30257345",
	interesses: null,
	visualizacoes: null,
	ativo: true
});

