const express= require('express')
const router=express.Router()
const homeControllers= require('../app/controllers/homeControllers')
router.get('/',homeControllers.home)
module.exports=router