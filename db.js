const mongoose = require('mongoose')
require('dotenv').config();
//Define the MongoDB connection URL
//const mongoURL='mongodb://localhost:27017/hotels' // Replace 'mydatabase' with your database name

// const mongoURL=process.env.MongoDB_URL_LOCAL                 // offline
const mongoURL=process.env.DB_URL;                        //online



// Set up MongoDB connection
mongoose.connect(mongoURL)

//Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db=mongoose.connection;

//Define events listeners for database connection
db.on('connected',()=>{
    console.log('Connected to MongoDB server');
});

db.on('error',(err)=>{
    console.error('MongoDB error:',err);
});

db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});

//Export the database connection
module.exports=db;