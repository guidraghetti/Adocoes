import JsonFilter from '../filters/jsonFilter'
import Interessado from '../models/interessado'
import User from '../models/usuario'
import Joi from 'joi'

export default

class InterLogic {

    static register(req, res) {
		var def1 = JsonFilter.filter(req);

		if(def1 === 'notjson')
			return res.sendStatus(400)

		const joiSchema = Joi.object().keys({
			email: Joi.string().email().required(),
	    	password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
	    	name: Joi.string().regex(/^[a-zA-Záéíóúý ]{3,30}$/).required()
	    }) 

	    var newUser = new User({
	    	email: def1.email,
	    	password: def1.password,
	    	type: 'Interessado'
	    })

	    Joi.validate({
	    	email: def1.email,
	    	password: def1.password,
	    	name: def1.name
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

							var newInter = new Interessado({
						    	name: def1.name,
						    	idRef: user._id
						    })

							Interessado.findOne({ name: def1.name })
							.then(interessado => {
								if(!interessado)
								{
									Interessado.create(newInter, (err, inter) => {
										if(err)
										{
										   User.remove({ _id: user._id }).catch()
										   return res.sendStatus(503)
										}

										User.update({ _id: user._id }, {$set: { idRef: inter._id }}, { upsert: true })
										.catch()

										res.json({ success: true, message: 'interessadosuccessfullyregistered' })
									})
								}
								else
								{
									User.remove({ _id: user._id }).catch()
									res.json({ success: false, message: 'namealreadyinuse' })
								}
							})
							.catch(() => {
								User.remove({ _id: user._id }).catch()
								res.sendStatus(503)
							})
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

        if(def1.idRef || def1._id)
        	return res.sendStatus(400)

        if(def1.name)
        {
        	joiSchema = joiSchema.concat(Joi.object({
        		name: Joi.string().regex(/^[a-zA-Záéíóúý ]{3,30}$/)	
        	}))
        }

        Joi.validate(def1, joiSchema, (err, value) => { 
        	if(err === undefined)
        	{
        		Interessado.update({ _id: req.param('id_interessado') }, {$set: def1 }, { upsert: true })
	        		.then(() => res.json({ success: true, message: "interessadosuccessfullyupdated" }))
					.catch(err => res.json({ success: false, message: err }))
        	}
        	else
        	{
        		res.json({ success: false, message: err.details })
        	}
        })
    }
}