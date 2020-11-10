const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors')
const AuthenticationRoutes=require('./routes/authentication')
const {port} =require('./config/keys')

const app=express();

app.use(cors())

app.use(bodyParser.json())



app.use('/authentication',AuthenticationRoutes);

app.use((error,req,res,next)=>{
    res.json({error})
})

app.listen(port,()=>{
    console.log("Visit : http://localhost:3000/authentication")
})