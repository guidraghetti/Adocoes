import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

var Schema = mongoose.Schema

var usuarioSchema = new Schema({
	email: String,
	password: String,
	type: String,
	idRef: String
})

var User = module.exports = mongoose.model('User', usuarioSchema)

module.exports.create = (newUser, callback) => {
	bcrypt.genSalt(10, (err, salt) => {
	    bcrypt.hash(newUser.password, salt, (err, hash) => {
	        newUser.password = hash
	        newUser.save(callback)
	    })
	})
}

module.exports.comparePassword = (candidatePassword, hash, callback) => {
	bcrypt.compare(candidatePassword, hash, function(err, match) {
    	if(err) throw err;
    	callback(null, match);
	});
}