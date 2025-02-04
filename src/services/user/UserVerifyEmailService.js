const OTPSModel=require("../../models/Users/OTPSModel");
const SendEmailUtility=require("../../utility/SendEmailUtility");

const UserVerifyEmailService=async (Request,DataModel)=>{
  try{
    //Email Account Query 
    let email = Request.params.email;
    let OTPCode = Math.floor(10000+Math.random()*900000)
    let UserCount = (await DataModel.aggregate([{$match:{email:email}},{$count:"total"}]))
    if(UserCount.length>0){
      // OTP Insert 
      await OTPSModel.create({email:email,otp:OTPCode})
      // Email Send
      let SendEmail = await SendEmailUtility(email,"Your PIN Code is="+OTPCode,"Inventory PIN Verification")
      return{status: "success",data:SendEmail}
    }
    else{
      return{status:"fail",data:"No User Found"}
    }
  }
  catch(error){
    return{status: "fail",data:error.toString()}
  }
}
module.exports = UserVerifyEmailService