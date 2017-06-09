const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema

const usuarioSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: true
	},
	senha: {
		type: String,
		required: true
	},
	nome: {
		type: String,
		required: true
	},
	perfis: [{
		type: String,
		enum: ['usuario', 'master', 'administrador', 'interessado'],
		required: true
	}],
	refPerfilAdministrador: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'administradores'
	},
	refPerfilInteressado: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'interessados'
	},
	ativo: {
		type: Boolean,
		required: true,
		default: true
	}
})

usuarioSchema.methods.verifyPassword = function (senha, callback) {
	bcrypt.compare(senha, this.senha, function (err, isMatch) {
		if (err) return cb(err)
		callback(null, isMatch)
	})
}

usuarioSchema.pre('save', function (callback) {
	const usuario = this;

	if (!usuario.isModified('senha')) return callback();

	bcrypt.genSalt(5, function (err, salt) {
		if (err) return callback(err)

		bcrypt.hash(usuario.senha, salt, function (err, hash) {
			if (err) return callback(err);

			usuario.senha = hash;
			callback();
		});
	})
})

mongoose.model('Usuario', usuarioSchema)
