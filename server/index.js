const express = require('express')
const app = express();
const cors = require('cors')
require('dotenv').config();
const mail = require('./routes/route')
const PORT = process.env.PORT || 4000
app.use(express.json( ))
app.use(cors({
  origin:'http://localhost:3000',
  credentials: false
}))
app.use('/my-portfolio',mail)

app.listen(PORT,()=>{
  console.log(`server started successfully at port : ${PORT}`)
})
app.get('/',(req,res)=>{
  return res.send(`<h2>This is defaul route of mail server</h2>`)
})