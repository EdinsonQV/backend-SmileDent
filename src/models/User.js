'use strict'

const mongoose = require('mongoose')
const Schema =mongoose.Schema
const bcrypt =require('bcrypt-nodejs')

const UsuarioSchema= new Schema({
    userName: {
        type: String,
        unique:true,
    },
    name: String,
    apellido:String,
    correo:{ 
        type: String, 
        unique:true, 
        lowercase:true},
    edad: Number,
    telefono:Number,
    clave: { 
        type:String, 
        select:false, 
        requiered: true},
    role:[{
        ref: "Role",
        type: Schema.Types.ObjectId
    }],

},{
    timeStamps:true,
    versionKey:false
})

UsuarioSchema.statics.encryptPassword= async(password)=>{
    const salt=bcrypt.genSalt(10)
    return await bcrypt.hash(password,salt)    
}
UsuarioSchema.statics.comparePassword= async(password,receivedPassword)=>{
    return await bcrypt.compare(password, receivedPassword)
}    

module.exports =  mongoose.model('User', UsuarioSchema)