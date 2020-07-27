
const express=require('express');
const router=express.Router();
const person = require('../moduls/person');
const { findById } = require('../moduls/person');

router.get('/', async (req,res)=>
{
    try{
        const persons= await person.find();
        res.json(persons);

    }catch(err){
res.json({message:err});
    }

}
);
router.post('/',async (req,res)=>
{
const P= new person({
  name:req.body.name,
  age:req.body.age,
  favoriteFoods:req.body.favoriteFoods  
});
try{
const savedperson=await P.save();
res.json(savedperson);
}
catch(err)
{
res.json({message:err});
}
});

router.get('/:id', async(req,res)=>
{
    try{
const personbyid=await person.findById(req.params.id);
res.json(personbyid);}
catch(err){
res.json({message:err});
}
});

module.exports = router;
