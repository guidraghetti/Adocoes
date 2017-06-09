// Cliente OAuth 2
// TODO: consider auto generating the client id and secret in order to enforce uniqueness, randomness, and strength
// TODO: hash the secret

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const clientSchema = new mongoose.Schema({
    nome: { type: String, unique: true, required: true },
    secret: { type: String, required: true }
});

clientSchema.methods.verifySecret = function (secret, callback) {
	bcrypt.compare(secret, this.secret, function (err, isMatch) {
		if (err) return cb(err)

		callback(null, isMatch)
	})
}

mongoose.model('Cliente', clientSchema)