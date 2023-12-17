const User=require('../models/User')
class HomeControllers{
    async home(req,res,next){
       User.find()
       .then(user=>{
            res.json(user)
            console.log('Showed')
       })
       .catch(next) 
    }
}
module.exports=new HomeControllers()