const express = require('express');
const router = require('router').Router();

// Create a product
router.post('/api/products', async (req, res) =>{
    const body = req.body;
    const product = await productModel.create({
        product_name : req.body.product_name,
        product_price : req.body.product_price,
        isInStock : req.body.isInStock,
        category : req.body.category
    })
    console.log(product);
    return res.status(201).json({message : 'Product Created Successfully.'});
})

// Get all products
router.get('/api/products', async (req, res) => {
    const allProducts = await productModel.find({});
    return res.status(200).json({message: 'Products fetched successfully', allProducts});
})

// Get a product by product id
router.get('/api/products/:id', async (req, res) => {
    const product = await productModel.findById(req.params.id);
    return res.json(product);
})

// Update Product Details
router.put('/api/products/:id', async (req, res) => {
    const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body);
    return res.json(updatedProduct);
})

// Delete a product by id
router.delete('/api/products/:id', async (req, res) => {
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
    return res.json(deletedProduct);s
})