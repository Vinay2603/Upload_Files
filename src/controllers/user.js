const express = require("express")

const User = require("../modules/user")
const upload = require("../middleware/upload")
const router = express.Router()

router.post("/", upload.single("userImages"),async(req, res )=>{
    try{
        const user =await  User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            profile_pic:req.file.path
        })
      
        return res.status(201).send({user})
    }catch(e){
        return res.status(500).json({message: e.message , status:"failed"})
    }
})

module.exports = router 