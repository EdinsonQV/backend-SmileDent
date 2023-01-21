const createRoles= require('./libs/initialSetup')
const express=require('express')
const app=express()
createRoles()
const morgan=require('morgan')
const cors=require('cors')
require('./database')
app.use(cors())
app.set('Port', process.env.PORT || 4000)
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Rutas
app.use('/',require('./routes/prueba.routes'))
app.use('/api/products',require('./routes/products.routes'))
app.use('/api/auth',require('./routes/auth.routes'))

//start server
app.listen(app.get('Port'),()=>{
    console.log('Listening for port:', app.get('Port'))
})
