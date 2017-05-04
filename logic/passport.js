import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import User from '../models/usuario'

export default app => {
	const opts = {}
	opts.secretOrKey = app.config.jwtSecret
	opts.jwtFromRequest = ExtractJwt.fromAuthHeader()

	const strategy = new Strategy(opts, (payload, done) => {
		User.findById(payload.id)
		.then(user => { 
			if(user) {
				return done(null, {
					id: user._id,
					email: user.email,
					type: user.type,
					idRef: user.idRef
				})
			}
			return done(null, false)
		})
		.catch(error => done(error, null))
	})

	passport.use(strategy)

	return {
		initialize: () => passport.initialize(),
		authenticate: () => passport.authenticate('jwt', app.config.jwtSession)
	}
}