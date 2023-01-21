'use strict'
const ProductCtrl={}
const Product=require('../models/Product')

//Crear nuevo producto
ProductCtrl.createProduct= async(req,res)=>{
    const{nombre,descripcion,categoria,costo,imgURL}=req.body
    const nuevoProducto= new Product({
        nombre,
        descripcion,
        categoria,
        costo,
        imgURL,
    })
    const productoGuardado=await nuevoProducto.save()
    res.status(201).json(productoGuardado)
}
//Obtener listado de productos
ProductCtrl.getProducto= async(req,res)=>{
    const Products= await Product.find()
    res.json(Products)
}
//Obtener producto por ID
ProductCtrl.getProductById=async(req,res)=>{
    const productById= await Product.findById(req.params.productId)
    res.status(200).json(productById )
}
//Actualizar producto por ID
ProductCtrl.updateProductById= async(req,res)=>{
    const updateProduct= await Product.findByIdAndUpdate(req.params.productId, req.body,{
        new:true
    })
    res.status(200).json(updateProduct)
}
//Eliminar producto por ID
ProductCtrl.deleteProductById= async(req,res)=>{
    await Product.findByIdAndDelete(req.params.productId)
    res.status(204).json()
}

module.exports=ProductCtrl