const express=require('express');
const bodyParser=require('body-parser');

const AuthenticationRoutes=require('./routes/authentication')

const PORT=3000||process.env.PORT;
const app=express();


app.use(bodyParser.urlencoded({extended:true}))


app.use('/authentication',AuthenticationRoutes);

app.use((error,req,res,next)=>{
    res.json({error})
})

app.listen(PORT,()=>{
    console.log("Visit : http://localhost:3000/authentication")
})