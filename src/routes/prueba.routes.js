'use strict'
const {Router}=require('express')
const route=Router()
const PruebaCtrl=require('../controllers/prueba.controllers')

route.get('/',PruebaCtrl.obtener)
route.post('/api',PruebaCtrl.crear)
route.put('/',PruebaCtrl.actualizar)
route.delete('/',PruebaCtrl.eliminar)
module.exports=route