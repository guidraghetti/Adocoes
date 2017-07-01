use Adocoes

// Cria aplicação cliente oauth inicial
db.clientes.count()
testCliente = {
    nome: "adocoes.app",
    secret: "$2a$05$rK1K/Vy0z/Kj5INVusw4eeA3M0UJTHmEx.U5w1k2WTWT78NeeAnrK" // "407a4d80fce791751cd83ab1af3d9b26"
};

db.clientes.update( testCliente, testCliente, {upsert:true});

testUsuario = {
    email: "admin@adocoes.ages.pucrs.br",
    senha: "$2a$05$M1COhDus0bY6rqkD2REl8.ZccrFgzFXH0a7sOEYU/FWYHTHJ.a8ZC", // "123"
    nome: "Administrador",
    perfis: "administrador",
	matricula: "1",
    ativo: true
};

db.usuarios.update(testUsuario, testUsuario, {upsert:true});
