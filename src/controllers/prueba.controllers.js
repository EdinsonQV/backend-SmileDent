'use strict'
const PruebaCtrl={}
const Usuario=require('../models/prueba.model')
//Creando funciones en el controlador
PruebaCtrl.obtener=(req,res)=>{
    res.send('funcionando get')
}

PruebaCtrl.crear=async(req,res)=>{
    const{nombre,apellido,cedula,correo,edad,clave,telefono}=req.body
    const nuevoRegistro= new Usuario({
        nombre,
        apellido,
        cedula,
        correo,
        edad,
        clave,
        telefono
    })
    await nuevoRegistro.save()
    res.json({
        mensaje:'Producto guardado'
    })
}

PruebaCtrl.actualizar=(req,res)=>{
    res.send('funciona put')
}

PruebaCtrl.eliminar=(req,res)=>{
    res.send('funciona delete')
}

module.exports=PruebaCtrl