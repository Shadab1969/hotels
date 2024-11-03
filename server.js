const express=require('express')
const app=express();
const db=require('./db');
require('dotenv').config();
const passport= require('./auth.js');
const cors= require('cors')


const bodyParser=require('body-parser');
app.use(bodyParser.json());//req.body
const PORT=process.env.PORT || 3000;

//Middleware for cors
app.use(cors());

//Middleware Function
const logrequest=(req,res,next)=>{
  console.log(`${new Date().toLocaleString()} Request Made to: ${req.originalUrl}`);
  next();  //Move on to the next phase
}
app.use(logrequest);


 app.use(passport.initialize());
//const localAuthMiddleware = passport.authenticate('local', {session: false});

app.get('/' ,function(req,res){
  res.send('Welcome to my hotel...How i can help you ?, we have list of menus')
})

//Import the router files
const personRoutes= require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes.js');
//use the routers
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);


app.listen(3000,()=>{
  console.log('listening on port 3000')
})