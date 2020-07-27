const mongoose=require('mongoose');
const personSchema=mongoose.Schema({
    name:
    {type: String, required: true, unique: true,default:"Med"},
    age:
    {type:Number,default:30},
    favoriteFoods:
    {type:Array,default:["chiken","pasta","cheese","meat"]}
})
module.exports=mongoose.model('person',personSchema);