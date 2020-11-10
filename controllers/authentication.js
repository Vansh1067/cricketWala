const axios=require('axios')
const {access_key,app_id,device_id,secret_key}=require('../config/keys');

module.exports.getAuthentication=(req,res,next)=>{

    res.send('Welcome to cricketWala ...for getting the access token send post req. to http://localhost:3000/authentication without any data and headres' )
}
module.exports.postAuthentication=(req,res,next)=>{
    
      axios.post(
        'https://rest.cricketapi.com/rest/v4/auth/',
        {access_key,app_id,device_id,secret_key}
    ).then(response => {
                console.log(response.data);
                res.json(response.data)
                
    }).catch(error => {console.log(error.message);next(error.message);
    })

      
}