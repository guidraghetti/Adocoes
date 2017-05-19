/*********** inicializa banco de dados 'Adocoes' e cria usuário administrador e cliente OAuth 2.0 ************/

use Adocoes

db.users.save({
    username: "Administrador",
    password: "$2a$05$M1COhDus0bY6rqkD2REl8.ZccrFgzFXH0a7sOEYU/FWYHTHJ.a8ZC" // 123
});

db.clients.save({
    name: "Test application",
    clientId: "test_application_id",
    secret: "test_application_secret"
});