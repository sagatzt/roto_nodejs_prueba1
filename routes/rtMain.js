const express = require('express')
const rtMain = express.Router()
const Mensaje = require('./../modules/Mensaje')

rtMain.get('/', function (req, res) {
    res.render('home')
})

rtMain.get('/procesar', (req,res)=>{
    let mensaje=new Mensaje(req.body.texto)
    mensaje.encriptar()
    res.render('home',mensaje)
})

module.exports=rtMain