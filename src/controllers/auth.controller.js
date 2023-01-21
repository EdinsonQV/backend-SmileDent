'use strict'
const AuthCtrl={}
const User=require('../models/User')
const jwt= require('jsonwebtoken')
const config=require('../config')

//Registarse
AuthCtrl.signUp= async(req,res)=>{
    const{username,name, apellido, correo,edad, telefono, clave,role} =req.body;
    
    const newUser= new User({
        username,
        password: User.encryptPassword(password)
    })
    if(role){
        const foundRole=await Role.find({name: {$in:role}})
        newUser.role=foundRole.map(rol=> rol._id)
    }else{
        const rol= await  Role.findOne({name:'User'})
        newUser.role=[rol._id];
    }
    const saveUser= await newUser.save()
    const token = jwt.sign({id: saveUser._id},config.SECRET,{
        expiresIn: 86400  //Dura un día
    })
    res.status(200).json({token})
}
//Ingresar
AuthCtrl.signIn= async(req,res)=>{
    const userFound= await User.findOne({correo: req.body.correo}).populate("role")
    if(!userFound) return res.status(400).json({message:'User not found'})
    const matchPassword= await User.comparePassword(req.body.clave, userFound.clave)
    if(!matchPassword) return res.statud(401).json({token:null,message:'Clave incorrecta'})
    const token = jwt.sign({id: userFound._id},config.SECRET,{
        expiresIn: 86400  //Dura un día
    })
    res.json({token})
}

// const userFound= User.find({correo})
module.exports=AuthCtrl