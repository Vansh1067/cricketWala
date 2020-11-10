const express=require('express');
const {postAuthentication,getAuthentication}=require('../controllers/authentication')
const routes=express.Router()



routes.get('/',getAuthentication)
routes.post('/',postAuthentication)



module.exports=routes