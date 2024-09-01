const express=require('express')
const app=express();
const db=require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json());//req.body

app.get('/',function(req,res){
  res.send('Welcome to my hotel...How i can help you ?, we have list of menus')
})

//Import the router files
const personRoutes= require('./routes/personRoutes');
//const menuRoutes=require('./routes/menuRoutes');
//use the routers
app.use('/person',personRoutes);
//app.use('/menu',menuroutes);

app.listen(3000,()=>{
  console.log('listening on port 3000')
})