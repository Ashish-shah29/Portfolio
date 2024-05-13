const { adminMail } = require("../mailTemplates/adminMail");
const { userMail } = require("../mailTemplates/userMail");
const { mailSender } = require("../utils/mailSender")

exports.sendMessage = async(req,res)=>{
  try{
    const {email,title,name,message} = req.body;
    console.log("server me aa gye")
    if(!email|| !title || !name || !message){
      res.status(404).json({
        success:false,
        message:"Please provide all the data"
      })
    }
    console.log("data validate kr liya ...")
    console.log("email : ",email)
    console.log("name: ",name)
    const userMailResponse = await mailSender(
      email,
      "Thanks for contacting - I have RECIEVED your message",
      userMail(name,email,message));
     console.log("user ko mail bhej diya....")
    const adminMailResponse = await mailSender(
      process.env.MAIL_USER,
      'New Portfolio Connection',
      adminMail(name,email,title,message)
    );
  
    res.status(200).json({
      success:true,
      message:"Mail Sent Successfully",
      data:adminMailResponse 
    })
  }
  catch(err){
    res.status(500).json({
      success:false,
      message:`Could not send mail : ${err}`
    })
  }
}