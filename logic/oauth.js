import JsonFilter from '../filters/jsonFilter'
import User from '../models/usuario'
import jwt from 'jsonwebtoken'
import config from '../config/config'
import Joi from 'joi'

export default (req, res) => {
		var def1 = JsonFilter.filter(req);

		if(def1 === 'notjson')
			return res.sendStatus(401)

		const joiSchema = Joi.object().keys({
	    	email: Joi.string().email().required(),
	    	password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
	    }) 

	    Joi.validate({
	    	email: def1.email,
	    	password: def1.password
		}, joiSchema, (err, value) => {
			if(err === null)
			{
				User.findOne({ email: def1.email })
				.then(user => {
						User.comparePassword(def1.password, user.password, (err, match) => {
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
			else res.sendStatus(401)
		})
}