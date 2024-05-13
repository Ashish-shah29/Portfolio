const nodemailer = require('nodemailer')
require('dotenv').config()

exports.mailSender = async(email,title,body)=>{
  try{
    // CONFIG NODEMAILER
    const transporter = nodemailer.createTransport({
      host:process.env.MAIL_HOST,
      auth:{
        pass:process.env.MAIL_PASS,
        user:process.env.MAIL_USER
      }
    })
    // SEND MAIL
    let info = transporter.sendMail({
      from: `Ashish - sending response`,
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`
    })
    return info;

  }catch(err){
 res.status(500).json({
  success:false,
  message:"can't send mail "
 })
  }
}