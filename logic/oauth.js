import JsonFilter from '../filters/jsonFilter'
import ModelFilter from '../filters/modelFilter'
import User from '../models/usuario'
import jwt from 'jsonwebtoken'
import config from '../config/config'

export default (req, res) => {
		var def1 = JsonFilter.filter(req);

		if(def1 === 'notjson')
			return res.sendStatus(401)

		if(!ModelFilter.filter(def1, User.schema.obj, [ 'idRef', 'type' ]))
			return res.sendStatus(401)

		const email = def1.email
		const password = def1.password

		User.findOne({ email: email })
		.then(user => {
				User.comparePassword(password, user.password, (err, match) => {
						if(err || !match)
							return res.sendStatus(401)

						const payload = { id: user._id }
					    res.json({ 
						token: jwt.sign(payload, config.jwtSecret, {
								expiresIn: 60 * 30
							})
					    })
				})
			})
		.catch(() => res.sendStatus(401))
}