import JsonFilter from '../filters/jsonFilter'
import Interessado from '../models/interessado'
import Menor from '../models/menor'
import User from '../models/usuario'
import Joi from 'joi'
import moment from 'moment'

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

    static getMenores(req, res) {
    	var def1 = JsonFilter.filter(req);

		if(def1 === 'notjson')
			return res.sendStatus(400)

		const joiSchema = Joi.object().keys({
			age: Joi.number().integer().min(0).max(18).required(),
			genderDistribution: Joi.number().min(0.2).max(0.8).required()
	    }) 

	    Joi.validate(def1, joiSchema, (err, value) => {
	    	if(err === null)
			{
				const limit = 20
				const age_diff = 2

				var yearInit = def1.age + age_diff 
				if(yearInit > 18)
					yearInit = 18

				var yearEnd = def1.age - age_diff
				if(yearEnd < 0)
					yearEnd = 0

				var dateInit = moment().subtract({ years: yearInit })
				.month(0).date(1).utc().set({ hour: 0, minute: 0, second: 0, millisecond: 0 })

				var dateEnd = moment().subtract({ years: yearEnd })
				.month(11).date(31).utc().set({ hour: 23, minute: 59, second: 59, millisecond: 999 })

				Menor.find({ "birthDate": { "$gte": dateInit, "$lte": dateEnd }})
				.then(menores => {
					if(menores.length == 0)
						res.json({ success: false, message: "emptylist" })
					else if(menores.length <= limit)
						res.json({ success: true, message: menores })
					else {
						var male = []
						var female = []

						var filtered = []

						for(let i = 0; i < menores.length; i++)
						{
							if(menores[i].gender === 'M') 
								male.push(menores[i])
							else female.push(menores[i])
						}

						for(let i = 0; i < limit; i++)
						{
							if(Math.random() < def1.genderDistribution)
							{
								if(male.length != 0) 
									this.spliceAndDice(filtered, male)
								else this.spliceAndDice(filtered, female)
							}
							else {
								if(female.length != 0) 
									this.spliceAndDice(filtered, female)
								else this.spliceAndDice(filtered, male)
							}
						}

						res.json({ success: true, message: filtered })					    
					}
				})
				.catch(err => {
					res.json({ success: false, message: "unknownerror" }) 
				})
			}
			else
			{
				res.json({ success: false, message: err.details })
			}
	    })
    }

    static spliceAndDice(arr1, arr2) {
    	let index = Math.floor(Math.random() * arr2.length)

    	arr1.push(arr2[index])
    	arr2.splice(index, 1)
    }

    static newVisualization(req, res) {
    	var def1 = JsonFilter.filter(req);

		if(def1 === 'notjson')
			return res.sendStatus(400)

		const joiSchema = Joi.object().keys({
			idMenor: Joi.string().required().regex(/^[0-9a-fA-F]{24}$/),
			timestamp: Joi.date().required()
	    }) 

	    Joi.validate(def1, joiSchema, (err, value) => {
	    	if(err === null)
	    	{

	    	}
	    	else
	    	{
	    		res.json(400, { success: false, message: err.details })
	    	}

	    	console.log(err)
	    })
    }
}