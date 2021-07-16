const express = require('express');


const router = express.Router();

const productController = require("../controllers/product");

router.get('/add', productController.getAddProductForm);

router.post('/add', productController.addProduct);


module.exports = router;
