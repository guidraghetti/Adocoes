import app from './app'
import mongo from 'mongodb'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/Adocoes')
var db = mongoose.connection

app.listen(app.get('port'), () => {
	console.log('listening on port '+ app.get('port'))
});