const express = require('express');
const router = express.Router();
const product_api = require('../../../controller/api/v1/product_api');
router.get('/',product_api.product);
router.post('/create',product_api.create);
module.exports = router;