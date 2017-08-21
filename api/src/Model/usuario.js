"use strict";

const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const Schema = mongoose.Schema;

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
		enum: ["usuario", "master", "administrador", "interessado"],
		required: true
	}],
	refPerfilAdministrador: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "administradores",
		required: false
	},
	refPerfilInteressado: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "interessados",
		required: false
	},
	ativo: {
		type: Boolean,
		required: true,
		default: true
	}
});

usuarioSchema.methods.verifyPassword = function (senha, callback) {
	bcrypt.compare(senha, this.senha, function (err, isMatch) {
		if (err) {
			return callback(err);
		}
		callback(null, isMatch);
	});
};

function validaCPF (cpf) {
	cpf = cpf.replace(/[^\d]+/g, "");
	if (cpf === "") {
		return false;
	}
	// Elimina CPFs invalidos conhecidos    
	if (cpf.length !== 11 ||
		cpf === "00000000000" ||
		cpf === "11111111111" ||
		cpf === "22222222222" ||
		cpf === "33333333333" ||
		cpf === "44444444444" ||
		cpf === "55555555555" ||
		cpf === "66666666666" ||
		cpf === "77777777777" ||
		cpf === "88888888888" ||
		cpf === "99999999999") {
		return false;
	}
	var add = 0;
	var i = 0;
	// Valida 1o digito 
	for (i = 0; i < 9; i++) {
		add += parseInt(cpf.charAt(i)) * (10 - i);
	}
	var rev = 11 - (add % 11);
	if (rev === 10 || rev === 11) {
		rev = 0;
	}
	if (rev !== parseInt(cpf.charAt(9))) {
		return false;
	}
	// Valida 2o digito 
	add = 0;
	for (i = 0; i < 10; i++) {
		add += parseInt(cpf.charAt(i)) * (11 - i);
	}
	rev = 11 - (add % 11);
	if (rev === 10 || rev === 11) {
		rev = 0;
	}
	if (rev !== parseInt(cpf.charAt(10))) {
		return false;
	}
	return true;
};

usuarioSchema.pre("save", function (callback) {
	const usuario = this;
	if (usuario.isModified("senha")) {
		bcrypt.genSalt(5, function (err, salt) {
			if (err) {
				return callback(err);
			}
			bcrypt.hash(usuario.senha, salt, null, function (err, hash) {
				if (err) {
					return callback(err);
				}
				usuario.senha = hash;
			});
		});
	}
	if (usuario.isModified("cpf") && !validaCPF(usuario.cpf)) {
		return callback(Error("CPF inválido"));
	}
	return callback();
});

mongoose.model("Usuario", usuarioSchema);