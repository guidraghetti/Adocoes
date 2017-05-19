var passport = require('passport');
var mongoose = require('mongoose');

var BasicStrategy = require('passport-http').BasicStrategy;
var BearerStrategy = require('passport-http-bearer').Strategy

// basic strategy para usuários
passport.use(new BasicStrategy(function (username, password, callback) {
    var User = mongoose.model('User');

    User.findOne({ username: username }, function (err, user) {
        if (err) {
            return callback(err);
        }

        if (!user) {
            return callback(null, false);
        }

        user.verifyPassword(password, function (err, isMatch) {
            if (err) {
                return callback(err);
            }

            if (!isMatch) {
                return callback(null, false);
            }

            // success
            return callback(null, user);
        });
    });
}));

// basic strategy para clientes oauth2
passport.use('client-basic', new BasicStrategy(    
    function (username, password, callback) {
        var Client = mongoose.model('Client');

        Client.findOne({ clientId: username }, function (err, client) {
            if (err) {
                return callback(err);
            }

            if (!client || client.secret !== password) {
                return callback(null, false);
            }

            return callback(null, client);
        });
    }
));

// bearer strategy para tokens oauth2
passport.use(new BearerStrategy(
    function (accessToken, callback) {
        var Token = mongoose.model('Token');
        var User = mongoose.model('User');

        Token.findOne({ value: accessToken }, function (err, token) {
            if (err) { 
                return callback(err); 
            }

            if (!token) { 
                return callback(null, false); 
            }

            User.findOne({ _id: token.userId }, function (err, user) {
                if (err) { 
                    return callback(err); 
                }

                if (!user) { 
                    return callback(null, false); 
                }

                callback(null, user, { scope: '*' });
            });
        });
    }
));

exports.isAuthenticated = passport.authenticate(['basic', 'bearer'], { session: false });
exports.isClientAuthenticated = passport.authenticate('client-basic', { session: false });

