const mongoose = require('mongoose');
const DataSchema=mongoose.Schema({
  UserEmail:{type:String},
  CustomerName:{type:String},
  phone:{type:String,unique:true},
  Email:{type:String},
  Address:{type:String},
  CreratedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const CustomersModel=mongoose.model('customers',DataSchema);
module.exports=CustomersModel