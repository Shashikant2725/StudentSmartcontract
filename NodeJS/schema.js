const mongoose=require('mongoose');

const Schema = mongoose.Schema;
let employee=new Schema({
name:{
    type:String
},
age:{
    type:Number
}
},
{collection:"Employees"})

mongoose.model.
