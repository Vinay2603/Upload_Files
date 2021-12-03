const express = require("express")

const Gallery = require("../modules/gallery")
const upload = require("../middleware/upload")
const router = express.Router()

router.post("/multiple", upload.any("pictures"),async(req, res )=>{
    const filePaths = req.files.map((file)=>file.path)
    try{
        const gallery =await  Gallery.create({
           
            pictures:filePaths
        })
      
        return res.status(201).send({gallery})
    }catch(e){
        return res.status(500).json({message: e.message , status:"failed"})
    }
})

module.exports = router 