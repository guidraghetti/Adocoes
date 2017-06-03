const mongoose = require('mongoose')
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
		enum: [ 'usuario', 'master', 'administrador', 'interessado'  ],
		required: true
	},
	refPerfilAdministrador: {
		type: ObjectId,
		ref: 'administradores'
	},
	refPerfilInteressado: {
		type: ObjectId,
		ref: 'interessados'
	},
	ativo: {
		type: Boolean,
		required: true,
		default: true
	}
})

// @eduardo.arruda: NÃO SERÁ NECESSÁRIO EM FUNÇÃO DO OAUTH2
userSchema.methods.verifyPassword = function (password, callback) {
	bcrypt.compare(password, this.password, function (err, isMatch) {
		if (err) return cb(err)
			callback(null, isMatch)
	})
}

// @eduardo.arruda: É NECESSÁRIO???
// Executar antes de cada chamada a user.save()
userSchema.pre('save', function (callback) {

	const user = this

	if (!user.isModified('password')) return callback()

	bcrypt.genSalt(5, function (err, salt) {
		if (err) return callback(err)

		bcrypt.hash(user.password, salt, null, function (err, hash) {
			if (err) return callback(err)

			user.password = hash
			callback()
		})
	})
})

mongoose.model('Usuario', usuarioSchema)
