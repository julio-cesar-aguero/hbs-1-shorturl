const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('db conectada'))
.catch(e => console.log('Fallo la conexion'+e+"Michi"+process.env.MONGODB_URI))