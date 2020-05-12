const express = require('express')

const router = express.Router()

const productController = require('./controller/ProductController')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) { //Analisar esse código qual a função dele na documentacao do express
    console.log('Time: ', Date.now());
    next();
});

//rotas
router.post("/products", productController.store)
router.get('/products', productController.index)
router.get('/products/:id', productController.show)
router.put('/products/:id', productController.update)
router.delete('/products/:id', productController.destroy)

//exporta todas as rotas
module.exports = router