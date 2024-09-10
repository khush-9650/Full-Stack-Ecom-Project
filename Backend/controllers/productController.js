const Product = require('../models/product.models');
const errorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const ApiFeatures = require('../utils/apiFeatures');




// Create Product --Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        sucess: true,
        product
    })
});

// Get All Products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {

    const apiFeature = new ApiFeatures(Product.find(), req.query).search();
    const products = await apiFeature.query;
    res.status(201).json({
        sucess: true,
        products
    })
});

// Get Single Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new errorHandler("Product not found", 404))
    };

    res.status(200).json({
        success: true,
        product
    })
});

// Update Product-- Admin
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new errorHandler("Product not found", 404))
    };

    product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindAndModify: false });

    res.status(201).json({
        sucess: true,
        product
    });


});

// Delete Product-- Admin
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new errorHandler("Product not found", 404))
    };

    await Product.deleteOne({ _id: req.params.id });
    res.status(200).json({
        success: true,
        message: "Product Successfully Deleted"
    })
});
