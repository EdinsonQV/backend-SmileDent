'use strict'
const {Router}=require('express')
const router=Router()
const productCtrl=require ('../controllers/products.controller')
//Rutas de producto
//Crear Producto
router.post('/', productCtrl.createProduct)
//Obtener producto
router.get('/', productCtrl.getProducto)
//Obtener producto por ID
router.get('/:productId', productCtrl.getProductById)
//Actualizar producto por ID
router.put('/:productID', productCtrl.updateProductById)
//Eliminar producto por ID
router.delete('/:productID', productCtrl.deleteProductById)

module.exports=router