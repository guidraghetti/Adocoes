import Menor from '../models/menor'

export default app => {
	app.route('/menores')
	.all(app.auth.authenticate())
    .get((req, res) => {
    	
	})
    .post((req, res) => {
    })

    app.route('/menores/:id_menor')
    .all(app.auth.authenticate())
    .get((req, res) => {

    })
    .put((req, res) => {

    })
    .delete((req, res) => {

    })

    app.route('/menores/ordenacao')
    .all(app.auth.authenticate())
    .get((req, res) => {

    })

    app.route('/menores/:id_menor/interessados')
    .all(app.auth.authenticate())
    .get((req, res) => {

    }) 
    .post((req, res) => {

    })

    app.route('/menores/:id_menor/interessados/:id_interessado')
    .all(app.auth.authenticate())
    .delete((req, res) => {

    })

    app.route('/menores/:id_menor/imagens')
    .all(app.auth.authenticate())
    .get((req, res) => {

    })
    .post((req, res) => {

    })

    app.route('/menores/:id_menor/imagens/:id_imagem')
    .all(app.auth.authenticate())
    .get((req, res) => {

    })
    .delete((req, res) => {

    })

    app.route('/menores/:id_menor/videos')
    .all(app.auth.authenticate())
    .post((req, res) => {

    })
    .get((req, res) => {

    })

    app.route('/menores/:id_menor/videos/:id_video')
    .all(app.auth.authenticate())
    .get((req, res) => {

    })
    .delete((req, res) => {

    })
}