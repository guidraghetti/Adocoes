const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs');

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
	cpf: {
		type: String,
		unique: true,
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

	if (usuario.isModified('senha')) {
		bcrypt.genSalt(5, function (err, salt) {
			if (err) return callback(err)
			bcrypt.hash(usuario.senha, salt, null, function (err, hash) {
				if (err) return callback(err);
				usuario.senha = hash;
			});
		})
	}

	if (usuario.isModified('cpf')) {
		var numeros, digitos, soma, i, resultado, digitos_iguais;
		digitos_iguais = 1;
		if (usuario.cpf.length < 11)
			return callback(Error('CPF inválido'));
		for (i = 0; i < usuario.cpf.length - 1; i++)
			if (usuario.cpf.charAt(i) != usuario.cpf.charAt(i + 1)) {
				digitos_iguais = 0;
				break;
			}
		if (!digitos_iguais) {
			numeros = usuario.cpf.substring(0,9);
			digitos = usuario.cpf.substring(9);
			soma = 0;
			for (i = 10; i > 1; i--)
				soma += numeros.charAt(10 - i) * i;
			resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
			if (resultado != digitos.charAt(0))
				return callback(Error('CPF inválido'));
			numeros = usuario.cpf.substring(0,10);
			soma = 0;
			for (i = 11; i > 1; i--)
				soma += numeros.charAt(11 - i) * i;
			resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
			if (resultado != digitos.charAt(1))
				return callback(Error('CPF inválido'));
		}
		else
			return callback(Error('CPF inválido'));
	}
	return callback();
});

mongoose.model('Usuario', usuarioSchema);
