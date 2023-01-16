var express = require('express')
var router = express.Router()



router.get("/", function (req, res, next) {
    if(req.session.user){
       res.redirect('/dashboard')
    }else{
        
        res.render("login")
    }  
    

})



module.exports = router;  