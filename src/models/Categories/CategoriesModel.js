const mongoose = require('mongoose');
const DataSchema=mongoose.Schema({
  UserEmail:{type:String},
  Name:{type:String,unique:true},
  CreratedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const CategoriesModel=mongoose.model('categories',DataSchema);
module.exports=CategoriesModel