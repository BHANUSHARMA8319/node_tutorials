const express=require('express');
const router= express.Router();

const menu=require('./../models/menu');
router.post('/', async (req,res)=>{
    try{
        const data=req.body;
        const menu_data=new menu(data);
        const menuItem= await menu_data.save();
        res.status(200).json(menuItem);
    }
    catch(error){
        res.send({error:'Internal server fault'});
    }

});
router.get('/', async (req,res)=>{
    try{
        const data= await menu.find();
        res.send(data);
    }
    catch(error){
        res.send({error});
    }
});

router.get('/:taste', async (req,res)=>{
    try{
        const taste=req.params.taste;
        if(taste=='sweet'|| taste=='sour' || taste=='spicy'){
            const response= await menu.find({taste:taste});
            res.send(response);
        }
        else{
            res.send("invalid taste type");
        }
        
    }
    catch(err){
        res.send({err:'server side Problem'});
    }
});

module.exports=router;