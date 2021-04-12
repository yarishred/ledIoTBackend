//Modulos
const express = require('express')
const cors = require('cors')
const app = express()

const ledRouter = require('./routes/ledRoutes')



//habilitar CORS
app.use(cors())




//Express Routes
app.use(ledRouter)

app.listen(3000, ()=>{
    console.log('Servidor escuchando en el puerto '+ 3000)
})