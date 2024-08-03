const mongoose = require('mongoose');
const DataSchema=mongoose.Schema({
  UserEmail:{type:String},
  Name:{type:String},
  Address:{type:String},
  phone:{type:String,unique:true},
  Email:{type:String},
  CreratedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const SuppliersModel=mongoose.model('suppliers',DataSchema);
module.exports=SuppliersModel