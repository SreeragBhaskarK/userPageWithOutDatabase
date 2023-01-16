var express = require("express")
var router= express.Router()

router.get('/',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err)
            res.send("Error")
        }else{
            res.render("login")
            
        }
    })
})


module.exports = router