const express = require('express');
const router = require('router').Router();
const productControllers = require('../Controllers/product.controller');

// Create a product
router.post('/api/products', productControllers.createProduct);

// Get all products
router.get('/api/products', productControllers.getAllProducts);

// Get a product by product id
router.get('/api/products/:id', productControllers.getProductById);

// Update Product Details
router.put('/api/products/:id', productControllers.updateProductById);

// Delete a product by id
router.delete('/api/products/:id', productControllers.deletedProductById);