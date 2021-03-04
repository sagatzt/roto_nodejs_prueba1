const express = require('express')
const app = express()
const rtMain = require('./routes/rtMain')
var exphbs  = require('express-handlebars')

//configuración del motor de plantillas handlebars
app.engine('.hbs', exphbs({
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

//middlewares
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended:true}))
//enrutador principal
app.use('/',rtMain)

//arrancamos el servidor:
app.listen(3000,(err)=>{
    console.log('Server run on port 3000')
})