const Product = require('../models/product.models');




// Create Product --Admin
exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        sucess: true,
        product
    })
}


// Get All Products
exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(201).json({
        sucess: true,
        products
    })
}


// Update Product-- Admin
exports.updateProduct = async (req, res) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            sucess: false,
            message: "Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindAndModify: false });

    res.status(201).json({
        sucess: true,
        product
    });


}