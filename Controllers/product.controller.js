const productModel = require('../Models/product.model');

exports.createProduct = async (req, res) =>{
    const product = await productModel.create({
        product_name : req.body.product_name,
        product_price : req.body.product_price,
        isInStock : req.body.isInStock,
        category : req.body.category
    })
    console.log(product);
    return res.status(201).json({message : 'Product Created Successfully.'});
}

exports.getAllProducts = async (req, res) => {
    const allProducts = await productModel.find({});
    return res.status(200).json({message: 'Products fetched successfully', allProducts});
}

exports.getProductById = async (req, res) => {
    const product = await productModel.findById(req.params.id);
    return res.json(product);
}

exports.updateProductById = async (req, res) => {
    const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body);
    return res.json(updatedProduct);
}

exports.deletedProductById = async (req, res) => {
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
    return res.json(deletedProduct);s
}