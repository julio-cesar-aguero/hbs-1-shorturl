const express = require('express')
const router = express.Router()

router.get("/home", (req, res)=>{
    const urls =[
        {origin: "www.google.com/bluuweb",shortURL: "hajkhskja"}
        ,
        {origin: "www.google.com/bluuweb",shortURL: "hajkhskja"}
        ,
        {origin: "www.google.com/bluuweb",shortURL: "hajkhskja"}
    ]

    res.render('home',{urls: urls})
})


module.exports = router