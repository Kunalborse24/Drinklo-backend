const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');  // Import product controller

// Get all products
router.get('/', productController.getAllProducts);

// Get products by category
router.get('/category/:categoryId', productController.getProductByCategory);

// Get product by ID
router.get('/:id', productController.getProductById);

module.exports = router;
