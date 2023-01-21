'use strict'

const mongoose = require('mongoose')
const Schema =mongoose.Schema
const bcrypt =require('bcrypt-nodejs')

const UserSchema= new Schema({
    nombre: String,
    apellido:String,
    cedula:String,
    correo:{ type: String, unique:true, lowercase:true},
    edad: String,
    clave: { type:String, select:false},
    telefono:String,

})

//UserSchema.pre('save',(next)=>{
 //   let user =this
   // if(!user.isModified('clave'))return next()

    //bcrypt.genSalt(10, (err,salt)=>{
      //  if(err) return next(err)

        //bcrypt.hash(user.clave, salt, null,(err, hash)=>{
          //  if(err) return next(err)

            //user.clave= hash
            //next()
        //})
    //})
//})

module.exports =  mongoose.model('Usuario', UserSchema)