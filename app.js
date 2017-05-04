import express from 'express'
import config from './config/config'
import bodyParser from 'body-parser'
import oauth2 from './logic/passport'
import oauthRouter from './routes/oauth'
import usersRouter from './routes/usuarios'
import menoresRouter from './routes/menores'
import interRouter from './routes/interessados'

const app = express()

app.config = config

app.use(bodyParser())
app.use(bodyParser.urlencoded({ extended: false }))

const auth = oauth2(app)
app.use(auth.initialize())
app.auth = auth
oauthRouter(app)

menoresRouter(app)
usersRouter(app)
interRouter(app)

app.set('port', process.env.PORT || 3000);

export default app