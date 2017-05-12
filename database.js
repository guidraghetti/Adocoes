import mongoose from 'mongoose'

require('./api/src/Model/Conteudo')

const db = 'mongodb://localhost:27017/test'

mongoose.connect(db)

mongoose.connection.on('connected', () => {  
  console.log('Mongoose default connection open to ' + db);
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