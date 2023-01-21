const {Router}=require('express')
const router=Router()
const authCtrl=require('../controllers/auth.controller')
//Ruta para ingresar
router.post('/signin', authCtrl.signIn )
//Ruta para registrarse
router.post('/signup', authCtrl.signUp)

module.exports=router