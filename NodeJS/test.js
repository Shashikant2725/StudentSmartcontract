const mongoose=require('mongoose');

var uri="mongoose://localhost:2700/details";

mongoose.connect(uri,{useUnifiedTopology:true,useNewUrlParser:true});

const connection=mongoose.connection;

connection.once("open",function(){
    console.log("db connected");
});