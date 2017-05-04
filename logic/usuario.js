import JsonFilter from '../filters/jsonFilter'
import bcrypt from 'bcryptjs'
import User from '../models/usuario'
import Joi from 'joi'

export default

class UserLogic{

    static register(req, res) {
		var def1 = JsonFilter.filter(req);

		if(def1 === 'notjson')
			return res.sendStatus(400)

	    const joiSchema = Joi.object().keys({
	    	email: Joi.string().email().required(),
	    	password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
	    }) 

	    var newUser = new User({
	    	email: def1.email,
	    	password: def1.password,
	    	type: 'Funcionario'
		})

		Joi.validate({
	    	email: def1.email,
	    	password: def1.password
		}, joiSchema, (err, value) => {
			if(err === null)
			{
				User.findOne({ email: def1.email })
				.then(user => {
					if(!user)
					{
						User.create(newUser, (err, user) => {
							if(err)
							   return res.sendStatus(503)

							res.json({ success: true, message: 'usersuccessfullyregistered' })
						})
					}
					else
					{
						res.json({ success: false, message: 'emailalreadyinuse' })
					}
				})
				.catch(() => res.sendStatus(503))
			}
			else
			{
				res.json({ success: false, message: err.details })
			}
		})
    }

    static update(req, res) {
		var def1 = JsonFilter.filter(req);

		if(def1 === 'notjson')
			return res.sendStatus(400)

        var joiSchema = Joi.object()

        if(def1.type || def1.idRef || def1._id)
        	return res.sendStatus(400)

        if(def1.email)
        {
        	joiSchema = joiSchema.concat(Joi.object({
        		email: Joi.string().email()
        	}))
        }

		if(def1.password)
		{
			joiSchema = joiSchema.concat(Joi.object({
				password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
			}))
		}
        
        Joi.validate(def1, joiSchema, (err, value) => {
        	if(err === null)
        	{
        		if(def1.password)
        		{
        			bcrypt.genSalt(10, (err, salt) => {
					    bcrypt.hash(def1.password, salt, (err, hash) => {
					        def1.password = hash

					        User.update({ _id: req.param('id_usuario') }, {$set: def1 }, { upsert: true })
			        		.then(() => res.json({ success: true, message: "usersuccessfullyupdated" }))
							.catch(err => res.json({ success: false, message: err }))
					    })
					})
        		}
        		else
        		{
        			User.update({ _id: req.param('id_usuario') }, {$set: def1 }, { upsert: true })
	        		.then(() => res.json({ success: true, message: "usersuccessfullyupdated" }))
					.catch(err => res.json({ success: false, message: err }))
        		}
        	}
        	else
        	{
        		res.json({ success: false, message: err.details })
        	}
        })
    }
}