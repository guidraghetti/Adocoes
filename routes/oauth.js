import oauth from '../logic/oauth'

export default app => {
	const config = app.config

	app.post('/oauth', (req, res) => {
		oauth(req, res)
	})
}