const express = require('express');
const router = require('router').Router();
const productControllers = require('../Controllers/product.controller');

// Create a product
router.post('/', productControllers.createProduct);

// Get all products
router.get('/', productControllers.getAllProducts);

// Get a product by product id
router.get('/:id', productControllers.getProductById);

// Update Product Details
router.put('/:id', productControllers.updateProductById);

// Delete a product by id
router.delete('/:id', productControllers.deletedProductById);