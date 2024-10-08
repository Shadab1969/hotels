
const express=require('express');
const router= express.Router();

const MenuItem =require('../models/MenuItem');
//POST methond for menu
router.post('/',async(req,res)=>{
  try{
    const data=req.body;
    const newMenu=new MenuItem(data);
    const response=await newMenu.save();
    console.log('data saved');
   res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server Error'});
  }
})

//GET method to get the menu Items

router.get('/',async(req,res)=>{
    try{
      
      const response=await MenuItem.find();
      console.log('data fetched');
     res.status(200).json(response);
    }
    catch(err)
    {
      console.log(err);
      res.status(500).json({error:'Internal server Error'});
    }
  })
  module.exports=router;