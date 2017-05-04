import Menor from '../models/menor'
import moment from 'moment'

export default app => {
	app.route('/menores')
	.all(app.auth.authenticate())
    .get((req, res) => {
    	
	})
    .post((req, res) => {
            var dateInit = moment().subtract({ years: 7 })
            .month(0).date(1).utc().set({ hour: 0, minute: 0, second: 0, millisecond: 0 })

            var menorJson = {
                name : "Fulano de Tal",
                gender : "M",
                birthDate : dateInit,
                shelterGuide : "Sei la",
                birthCertificate: "Tanto faz",
                familyReferences : [ 
                    {
                        refType : "Mãe",
                        name : "Beltrona de Tal"
                    }, 
                    {
                        refType : "Pai",
                        name : "Sicrano de Tal"
                    }
                ],
                nationality : "brasileira",
                placeOfBirth : {
                    cidade : "Porto Alegre",
                    uf : "RS",
                    country : "Brasil"
                },
                location : {
                    city : "Santa Maria",
                    uf : "RS",
                    country : "Brasil"
                },
                shelterRef: "10123232"
            }

        for(let i = 0; i < 100; i++)
        {
            if(Math.random() < 0.5)
                menorJson.gender = "F"
            else menorJson.gender = "M"

            var menor = new Menor(menorJson)

            menor.save()
        }
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