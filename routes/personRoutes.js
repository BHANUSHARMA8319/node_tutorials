const express=require('express');
const router=express.Router();
const Person = require('./../models/person');
router.post('/',async (req,res)=>{
    try{
        const data=req.body;
        const newPerson=new Person(data);
        const response=await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:'Internal server Error'});

    }

});

router.get('/',async (req,res)=>{
    try{
        const data= await Person.find();
        res.send(data);
    }
    catch(error){
        res.send({error});
    }
});

router.get('/:work', async (req,res)=>{
    try{
        const workType=req.params.work;
        if(workType=='chef'|| workType=='manager' || workType=='waiter'){
            const response=await Person.find({work:workType});
            res.status(200).json(response);
        }
        else{
            res.status(404).json("invalid work type");
        }
    }
    catch(error){
        res.send({error});
    }
});

router.put('/:id',async (req,res)=>{
    try{
        const person_id= req.params.id;
        const update_info= req.body;

        const response= await Person.findByIdAndUpdate(person_id,update_info,{
            new:true,
            runValidators:true
        });
        
        if(!response){
            return res.send("invalid person id");
        }

        res.send(response);
    }
    catch(err){
        res.send({err});
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const Personid= req.params.id;
        const response= await Person.findByIdAndDelete(Personid);

        if(!response){
            return res.send("No such document is found");
        }

        res.send("Document deleted successfully");
    }
    catch(err){
        console.log(err);
        res.send({err:"server side error"});
    }
});
// comment added to test versioning.....
module.exports=router;