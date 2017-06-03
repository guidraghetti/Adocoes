// TODO - implement a strong hashing scheme for the access token. Never store them as plain text as we are in this example
// TODO - add expiration date (see )

const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    value: { type: String, required: true },
    clientId: { type: String, required: true },
    userId: { type: String }
});

mongoose.model('Token', tokenSchema)