import mongoose from 'mongoose'

import { config } from './config'

import * as models from './api/src/Model';

import Cliente from './api/src/Model/Auth/cliente';
import Token from './api/src/Model/Auth/token';

const enviroment = process.env.NODE_ENV || 'development'

const db = config[enviroment].databaseUri

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