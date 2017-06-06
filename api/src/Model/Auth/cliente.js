// Cliente OAuth 2
// TODO: consider auto generating the client id and secret in order to enforce uniqueness, randomness, and strength
// TODO: hash the secret

const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    nome: { type: String, unique: true, required: true },
    secret: { type: String, required: true }
});

mongoose.model('Cliente', clientSchema)