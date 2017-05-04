import Interessado from '../models/interessado'
import InterLogic from '../logic/interessado'

export default app => {
	app.route('/interessados')
	.all(app.auth.authenticate())
    .get((req, res) => {
    	if(req.user.type != 'Admin' && req.user.type != 'Funcionario')
            return res.sendStatus(401)

    	Interessado.find({})
    	.then(interessados => {
    		res.json({ success:true, message: interessados })
    	})
    	.catch(err => res.json({ success: false, message: err }))
	})
    .post((req, res) => {
    	if(req.user.type != 'Admin' && req.user.type != 'Funcionario')
            return res.sendStatus(401)

        InterLogic.register(req, res)
    })

    app.route('/interessados/:id_interessado')
	.all(app.auth.authenticate())
    .get((req, res) => {
    	if(req.user.type != 'Admin' && req.user.type != 'Funcionario')
    	{
    		if(req.user.type != 'Interessado') 
    			return res.sendStatus(401)
    		else if(req.user.idRef != req.param('id_interessado'))
    			return res.sendStatus(400)
    	}

    	Interessado.findById(req.param('id_interessado'))
		.then(interessado => { 
			if(interessado) {
				res.json({ success: true, message: {
					name: interessado.name,
					idRef: interessado.idRef
				}})
			}
			else res.json({ success: false, message: "interessadonotfound" })
		}).catch(err => res.json({ success: false, message: err }))
	})
    .put((req, res) => {
    	if(req.user.type != 'Admin') {
    		if(req.user.type != 'Interessado') 
    			return res.sendStatus(401)
    		else if(req.user.idRef != req.param('id_interessado')) 
    			return res.sendStatus(400)

    		InterLogic.update(req, res)
    	} 
    	else {
    		Interessado.findById(req.param('id_interessado'))
    		.then(interessado => {
    			if(!interessado)
    				return res.json({ success: false, message: "interessadonotfound" })

    			InterLogic.update(req, res)
    		})
    		.catch(err => res.json({ success: false, message: err }))
    	}
    })
    .delete((req, res) => {
    	if(req.user.type != 'Admin')
    	{
    		if(req.user.type != 'Interessado') 
    			return res.sendStatus(401)
    		else if(req.user.idRef != req.param('id_interessado'))
    			return res.sendStatus(400)
    	}

    	Interessado.remove({ _id: req.param('id_interessado') })
    	.then(connection => {
            if(connection.result.n == 0)
                return res.json({ success: false, message: "interessadonotfound" })

            res.json({ success: true, message: "interessadosuccessfullydeleted" })
        })
    	.catch(err => res.json({ success: false, message: err }))
    })

    app.route('/interessados/:id_interessado/ordenacao')
	.all(app.auth.authenticate())
    .post((req, res) => {
    	if(req.user.type != 'Admin')
    	{
    		if(req.user.type != 'Interessado') 
    			return res.sendStatus(401)
    		else if(req.user.idRef != req.param('id_interessado'))
    			return res.sendStatus(400)
    	}

    	InterLogic.getMenores(req, res)
    })

    app.route('/interessados/:id_interessado/visualizacoes')
	.all(app.auth.authenticate())
    .get((req, res) => {

    })
    .post((req, res) => {

    })
    .put((req, res) => {
    	
    })

    app.route('/interessados/:id_interessado/menores')
	.all(app.auth.authenticate())
    .get((req, res) => {

    })
    .post((req, res) => {

    })

    app.route('/interessados/:id_interessado/menores/:id_menor')
	.all(app.auth.authenticate())
    .delete((req, res) => {

    })

    app.route('/interessados/:id_menor')
	.all(app.auth.authenticate())
    .get((req, res) => {

    })
}