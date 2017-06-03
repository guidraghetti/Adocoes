import mongoose from 'mongoose'

import * as models from './api/src/Model'

const db = 'mongodb://localhost:27017/Adocoes'

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