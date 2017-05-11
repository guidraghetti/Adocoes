import mongoose from 'mongoose'
import conteudoModel from './api/src/Model/Conteudo'

const dbUri = 'mongodb://localhost:27017'

mongoose.connect(dbUri)

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

mongoose.connection.on('error', (error) => {  
  console.log('Mongoose default connection error: ' + error);
}); 

mongoose.connection.on('disconnected', () => {  
  console.log('Mongoose default connection disconnected'); 
});

process.on('SIGINT', () => {  
  mongoose.connection.close(() => { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
});