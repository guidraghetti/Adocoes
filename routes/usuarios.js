import UserLogic from '../logic/usuario'
import User from '../models/usuario'

export default app => {
	app.route('/usuarios')
    .all(app.auth.authenticate())
    .get((req, res) => {
        if(req.user.type != 'Admin')
            return res.sendStatus(401)

        User.find({})
        .then(users => {
            res.json({ success:true, message: users })
        })
        .catch(err => res.json({ success: false, message: err }))
	})
    .post((req, res) => {
        if(req.user.type != 'Admin')
            return res.sendStatus(401)

        UserLogic.register(req, res)
    })

    app.route('/usuarios/:id_usuario')
    .all(app.auth.authenticate())
    .get((req, res) => {
        if(req.user.type != 'Admin' && req.user.id != req.param('id_usuario'))
            return res.sendStatus(401)

    	User.findById(req.param('id_usuario'))
		.then(user => { 
			if(user) {
				res.json({ success: true, message: {
                    id: user._id,
                    email: user.email,
                    name: user.name
                }})
			}
			else res.json({ success: false, message: 'usernotfound' })
		}).catch(err => res.json({ success: false, message: err }))
    })
    .put((req, res) => {
        if(req.user.type != 'Admin') {
            if(req.user.id != req.param('id_usuario')) 
                return res.sendStatus(400)

            UserLogic.update(req, res)
        } 
        else {
            User.findById(req.param('id_usuario'))
            .then(user => {
                if(!user)
                    return res.json({ success: false, message: "usernotfound" })

                UserLogic.update(req, res)
            })
            .catch(err => res.json({ success: false, message: err }))
        }
    })
    .delete((req, res) => {
        if(req.user.type != 'Admin' && req.user.id != req.param('id_usuario'))
            return res.sendStatus(401)

    	User.remove({ _id: req.param('id_usuario') })
    	.then(connection => {
            if(connection.result.n == 0)
                return res.json({ success: false, message: "usernotfound" })

            res.json({ success: true, message: "usersuccessfullydeleted" })
        })
    	.catch(err => res.json({ success: false, message: err }))
    })
}