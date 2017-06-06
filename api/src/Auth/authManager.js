var passport = require('passport');
var mongoose = require('mongoose');

var BasicStrategy = require('passport-http').BasicStrategy;
var BearerStrategy = require('passport-http-bearer').Strategy

// estratégia para clientes oauth2
passport.use('client-basic', new BasicStrategy(    
    function (nome, secret, callback) {
        var Cliente = mongoose.model('Cliente');

        Cliente.findOne({ nome: nome }, function (err, cliente) {
            if (err) {
                return callback(err);
            }

            if (!cliente || cliente.secret !== secret) {
                return callback(null, false);
            }

            return callback(null, cliente);
        });
    }
));

// estratégia para tokens oauth2
passport.use(new BearerStrategy(
    function (accessToken, callback) {
        var Token = mongoose.model('Token');
        var Usuario = mongoose.model('Usuario');

        Token.findOne({ value: accessToken }, function (err, token) {
            if (err) { 
                return callback(err); 
            }

            if (!token) { 
                return callback(null, false); 
            }

            Usuario.findOne({ _id: token.userId }, function (err, usuario) {
                if (err) { 
                    return callback(err); 
                }

                if (!usuario) { 
                    return callback(null, false); 
                }
                
                // TODO - permite a definição de escopo de acordo com o perfil do usuario
                callback(null, usuario, { scope: '*' });
            });
        });
    }
));

exports.isAuthenticated = passport.authenticate(['bearer'], { session: false });
exports.isClientAuthenticated = passport.authenticate('client-basic', { session: false });

