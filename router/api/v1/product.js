const express = require('express');
const router = express.Router();
const product_api = require('../../../controller/api/v1/product_api');
//to get all prodcucts form db
router.get('/',product_api.product);
//to add new product
router.post('/create',product_api.create);
//to remove existing product
router.delete('/:id',product_api.destroy);
//to get product using id
router.get('/:id',product_api.getProduct);
//to update quantity
router.post('/update/:id',product_api.update);

module.exports = router;