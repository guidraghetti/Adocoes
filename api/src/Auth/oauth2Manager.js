var mongoose = require('mongoose');
var oauth2orize = require('oauth2orize');
var bcrypt = require('bcrypt-nodejs');

// CONFIGURAÇÃO PARA O SERVIDOR DE AUTORIZAÇÃO OAUTH 2 (OAUTH2ORIZE)
// ----------------------------------------------------
var server = oauth2orize.createServer();

server.serializeClient(function (cliente, callback) {
    return callback(null, cliente._id);
});

server.deserializeClient(function (id, callback) {
    var Cliente = mongoose.model('Cliente');

    Cliente.findOne({ _id: id }, function (err, cliente) {
        if (err) { return callback(err); }
        return callback(null, cliente);
    });
});

// GRANT TYPE: RESOURCE OWNER PASSWORD CREDENTIALS -- o servidor de autorização verifica se o resource owner informado existe e se a senha está correta
// ----------------------------------------------------

server.exchange(oauth2orize.exchange.password(function (cliente, email, senha, scope, done) {
    var Usuario = mongoose.model('Usuario');

    Usuario.findOne({email: email}, function (err, usuario) {
        if (err) return done(err)

        if (!usuario) return done(null, false)

        bcrypt.compare(senha, usuario.senha, function (err, res) {
            if (!res) return done(null, false)

            var Token = mongoose.model('Token');

            var token = new Token({
                value: uid(256),
                clientId: cliente._id,
                userId: usuario._id
            });
            
            token.save(function (err) {
                if (err) {
                    return callback(err);
                }

                done(null, token);
            });
        })
    })
}))

// o oauth2orize vai direcionar para o tratador adequado de acordo com o parâmetro 'grant-type' presente no corpo da requisição
// neste caso, apenas a estratégia RESOURCE OWNER PASSWORD CREDENTIALS é utilizada, ou seja, "grant-type":"password" 
exports.token = [
    server.token(),
    server.errorHandler()
]

// HELPERS
// ----------------------------------------------------

function uid(len) {
    var buf = []
        , chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        , charlen = chars.length;

    for (var i = 0; i < len; ++i) {
        buf.push(chars[getRandomInt(0, charlen - 1)]);
    }

    return buf.join('');
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

