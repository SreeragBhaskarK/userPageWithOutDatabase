var express = require("express")
var router = express.Router()

const emailDB = "admin@gmail.com"
const passwordDB = 'admin123'

router.post("/",function(req,res){
    
    
    const{email,pass}=req.body
    if(email===emailDB && pass===passwordDB){
        req.session.user=req.body.email
        res.redirect('/dashboard')
    
        
    }else{
        res.render("login",{message:"Invalid Email And Password"})
    }
})

router.get("/",function(req,res){
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        res.redirect('/')
    }  
})



module.exports=router